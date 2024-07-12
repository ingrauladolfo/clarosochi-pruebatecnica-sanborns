import React, { useState } from "react";
import Privacy from "./Privacy";
import socialLinks from "../assets/data/socialNetworks";

const Footer = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const togglePrivacyModal = () => {
    setShowPrivacyModal(!showPrivacyModal);
  };

  // Número ficticio para propósitos de ejemplo con formato mexicano
  const contactoNumero = "+52 1 55 1234 5678";

  // Función para abrir WhatsApp
  const openWhatsApp = () => {
    window.open(`https://wa.me/${contactoNumero.replace(/\s/g, "")}`, "_blank");
  };

  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 justify-between items-center">
        <div className="flex space-x-2 justify-center">
          <button onClick={togglePrivacyModal} className="hover:underline">
            Aviso de privacidad
          </button>
          <span>/</span>
          <a onClick={openWhatsApp} className="hover:underline cursor-pointer">
            Contacto
          </a>
        </div>
        <div className="flex justify-center mt-4 md:mt-0">
          {/* Agregado mt-4 en pantallas móviles */}
          <img src="/img/logo-sochi-color.png" alt="Logo" className="h-10" />
        </div>
        <div className="flex space-x-4 justify-center mt-4 md:mt-0">
          {socialLinks.map(({ link, colorClass, imgLink, imgAlt }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`border border-full ${colorClass}`}
            >
              <img src={imgLink} alt={imgAlt} className="h-6" />
            </a>
          ))}
        </div>
      </div>

      {showPrivacyModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="bg-white p-8 rounded-md w-full h-full overflow-y-auto relative text-gray-900">
            <div className="sticky top-0 bg-transparent flex justify-end">
              <button
                onClick={togglePrivacyModal}
                className="text-gray-500 hover:text-gray-800 p-2"
              >
                &times;
              </button>
            </div>
            <div className="p-4">
              <Privacy />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
