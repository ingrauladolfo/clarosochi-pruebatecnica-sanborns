import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ClaroSports from "./components/ClaroSports";
import Footer from "./components/Footer";

const App = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkSelect = (url) => {
    setVideoUrl(url);
    setSelectedLink(url); // Actualiza el estado de selectedLink
  };

  const deselectLink = () => {
    setVideoUrl(null); // Deselecciona el enlace activo
    setSelectedLink(null); // Deselecciona el link en ClaroSports
  };

  return (
    <>
      <Navbar />
      <Banner videoUrl={videoUrl} deselectLink={deselectLink} />
      <ClaroSports
        onLinkSelect={handleLinkSelect}
        deselectLink={deselectLink}
        selectedLink={selectedLink} // Pasa el estado de selectedLink a ClaroSports
      />
      <Footer />
    </>
  );
};

export default App;
