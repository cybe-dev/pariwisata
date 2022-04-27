import { useState, useEffect } from "react";
import MainWrapper from "./MainWrapper";

const NavList = ({ children, y }) => (
  <a
    href="#"
    className={
      "poppins ml-0 lg:ml-8 font-bold py-3 px-8 lg:p-0 border-b lg:border-b-0 text-gray-700 " +
      (y <= 0
        ? "lg:text-gray-200 lg:hover:text-white"
        : "lg:text-gray-500 lg:hover:text-gray-600")
    }
  >
    {children}
  </a>
);

export default function Header({ name }) {
  const [y, setY] = useState(0);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const listen = (event) => {
      setY(window.scrollY);
    };

    window.addEventListener("scroll", listen);

    return () => {
      window.removeEventListener("scroll", listen);
    };
  }, []);
  return (
    <div
      className={
        "flex justify-center fixed top-0 left-0 w-full z-20 transition-all duration-300 " +
        (y > 0 ? "bg-white" : "bg-transparent")
      }
    >
      <MainWrapper className="h-20 flex items-center">
        <h1
          className={
            "tapestry font-bold text-3xl " +
            (y > 0 ? "text-primary" : "text-white")
          }
        >
          {name}
        </h1>
        <div
          className={
            "flex flex-col lg:flex-row items-stretch lg:items-center ml-auto w-full lg:w-auto h-screen lg:h-auto fixed lg:static top-0 left-0 bg-white lg:bg-transparent transition-all duration-300 transform lg:transform-none " +
            (menu ? "translate-x-0" : "translate-x-full")
          }
        >
          <div className="mb-5 py-3 px-8 flex justify-end">
            <button
              onClick={() => setMenu(false)}
              type="button"
              className={
                "block lg:hidden ml-auto text-gray-700 py-2 px-3 -mr-3"
              }
            >
              TUTUP
            </button>
          </div>
          <NavList y={y}>Beranda</NavList>
          <NavList y={y}>Destinasi</NavList>
          <NavList y={y}>Tentang</NavList>
        </div>
        <button
          onClick={() => setMenu(true)}
          type="button"
          className={
            "block lg:hidden ml-auto py-2 px-3 -mr-3 " +
            (y <= 0
              ? "text-gray-200 hover:text-white"
              : "text-gray-500 hover:text-gray-600")
          }
        >
          MENU
        </button>
      </MainWrapper>
    </div>
  );
}
