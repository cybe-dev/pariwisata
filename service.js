import axios from "axios";

export const Provider = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + "/api",
});

export const getDestination = () =>
  new Promise((resolve) => {
    Provider.get("/destinations?populate=*")
      .then((response) => {
        resolve(
          response.data.data.map((item) => {
            const {
              name,
              description,
              image: { data: { attributes: { url: image } = {} } = {} } = {},
            } = item.attributes;

            return {
              name,
              description,
              image,
            };
          })
        );
      })
      .catch(() => {
        resolve([]);
      });
  });

export const getWebsiteInfo = () =>
  new Promise((resolve) => {
    Provider.get("/website-info?populate=*")
      .then((response) => {
        const {
          name,
          jumboTitle,
          jumboContent,
          description,
          background: {
            data: { attributes: { url: background } = {} } = {},
          } = {},
        } = response.data.data.attributes;

        resolve({
          name,
          jumboTitle,
          jumboContent,
          description,
          background,
        });
      })
      .catch(() => {
        resolve({});
      });
  });
