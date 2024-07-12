import React from "react";
import links from "../assets/data/linksData";

const ClaroSports = ({ onLinkSelect, deselectLink, selectedLink }) => {
  const handleLinkSelect = (link) => {
    if (selectedLink === link.url) {
      deselectLink(); // Llama a la función deselectLink para asegurar la deselección
    } else {
      onLinkSelect(link.url); // Llama a la función onLinkSelect con la URL seleccionada
    }
  };

  return (
    <section className="bg-[#232323]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            CLARO SPORTS EN SOCHI 2024
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {links.map((link, index) => (
              <div
                key={index}
                className={`text-center text-gray-500 dark:text-gray-400 cursor-pointer ${
                  link.url === selectedLink ? "bg-gray-800" : ""
                }`}
                onClick={() => handleLinkSelect(link)}
              >
                <img
                  className="mx-auto mb-4 w-36 h-36 rounded-full"
                  src={link.image}
                  alt={`${link.name} Avatar`}
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href={link.url}>{link.name}</a>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaroSports;
