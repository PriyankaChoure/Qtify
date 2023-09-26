import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { fetchAlbumData, fetchSongsData, fetchTopSongs } from "./apis/api";
import { Sections } from "./components/Sections/Sections";
import { FAQSection } from "./components/AccordianFAQ/FAQSection";
const App = () => {
  const [data, setData] = useState({});

  const generateData = (getMethod, type, title) => {
    getMethod(type).then((responseData) => {
      setData((prevState) => {
        return { ...prevState, [title]: responseData };
      });
    });
  };

  useEffect(() => {
    generateData(fetchAlbumData, "top", "topAlbum");
    generateData(fetchAlbumData, "new", "newAlbum");
    generateData(fetchSongsData, "songs", "songs");
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <div>
        {Object.keys(data).length > 0 ? <Sections albums={data} /> : <></>}
      </div>
      <FAQSection />
    </div>
  );
};

export default App;
