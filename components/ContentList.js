import Image from "next/image";

export default function ContentList({ image, name, description }) {
  return (
    <div className="flex flex-col lg:flex-row mb-12 pb-12 border-b border-gray-300">
      <div className="relative w-full lg:w-auto">
        <div className="bg-gray-300 w-64 h-44 ml-2 mt-2 absolute top-0 left-0 rounded hidden lg:block" />
        <div className="bg-black w-full h-44 lg:w-64 lg:h-44 relative rounded overflow-hidden shadow">
          <Image src={image} layout="fill" className="w-full" />
        </div>
      </div>
      <div className="flex-1 mt-5 lg:mt-0 lg:ml-8">
        <h4 className="poppins font-bold text-lg lg:text-2xl text-gray-700">
          {name}
        </h4>
        <p className="text-gray-600 mt-1 lg:mt-5 text-justify text-sm lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
