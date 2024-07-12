import React, { useState } from "react";
import Privacy from "./Privacy";

const Footer = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const togglePrivacyModal = () => {
    setShowPrivacyModal(!showPrivacyModal);
  };

  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 justify-between items-center">
        <div className="flex space-x-2 justify-center">
          <button onClick={togglePrivacyModal} className="hover:underline">
            Aviso de privacidad
          </button>
          <span>/</span>
          <a href="/contact" className="hover:underline">
            Contacto
          </a>
        </div>
        <div className="flex justify-center mt-4 md:mt-0">
          {" "}
          {/* Agregado mt-4 en pantallas móviles */}
          <img src="/img/logo-sochi-color.png" alt="Logo" className="h-10" />
        </div>
        <div className="flex space-x-4 justify-center mt-4 md:mt-0">
          {" "}
          {/* Agregado mt-4 en pantallas móviles */}
          <a
            href="https://www.mobli.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-full border-[#68adf2] bg-[#68adf2]"
          >
            <img src="/img/mobli-icon.webp" alt="Mobli" className="h-6" />
          </a>
          <a
            href="https://twitter.com/ClaroSports"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-full border-[#55abf4] bg-[#55abf4]"
          >
            <img src="/img/twitter.webp" alt="Twitter" className="h-6" />
          </a>
          <a
            href="https://www.facebook.com/clarosports/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-full border-[#3a5697] bg-[#3a5697]"
          >
            <img src="/img/facebook.webp" alt="Facebook" className="h-6" />
          </a>
          <a
            href="https://www.youtube.com/@clarosports"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-full border-[#a4281e] bg-[#a4281e]"
          >
            <img src="/img/youtube.webp" alt="Youtube" className="h-6" />
          </a>
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
