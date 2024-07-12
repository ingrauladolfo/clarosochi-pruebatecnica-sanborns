import React, { useState, useEffect } from "react";
import CounterTime from "./CounterTime";
import YouTube from "react-youtube";

const Banner = ({ videoUrl, deselectLink }) => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (videoUrl) {
      setShowVideo(true);
    }
  }, [videoUrl]);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
    deselectLink(); // Llama a la función para deseleccionar el enlace activo en ClaroSports
  };

  return (
    <div className="relative h-96 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/img/background.webp")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          opacity: 1,
          zIndex: -100,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 md:mt-[-120px]">
            Faltan
          </h1>
          <CounterTime />
        </div>
      </div>
      {showVideo && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="relative w-full h-full max-w-screen-lg mx-auto">
            <YouTube
              videoId={videoUrl} // Aquí debería ser solo el ID del video, no la URL completa
              containerClassName="absolute inset-0"
              className="w-full h-full"
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 0, // Desactiva la reproducción automática
                  controls: 1,
                  modestbranding: 1,
                  showinfo: 0,
                  origin: window.location.origin,
                },
              }}
              onEnd={toggleVideo}
            />
            <button
              onClick={toggleVideo}
              className="absolute top-4 right-4 z-10"
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                border: "none",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                }}
              >
                &times;
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
