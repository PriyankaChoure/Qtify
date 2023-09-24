import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { fetchAlbumData, fetchSongsData, fetchTopSongs } from "./apis/api";
import { Card } from "./components/Card/Card";
import { Sections } from "./components/Sections/Sections";
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
    </div>
  );
};

export default App;
