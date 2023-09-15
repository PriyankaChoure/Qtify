import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { fetchTopSongs } from "./apis/api";
import { Card } from "./components/Card/Card";
const App = () => {
  const [topAlbum, setTopAlbum] = useState([]);
  const getTopAlbumData = async () => {
    const responseData = await fetchTopSongs();
    setTopAlbum(responseData);
    console.log(responseData);
  };

  useEffect(() => {
    getTopAlbumData();
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div>
        {topAlbum && (
          <div>
            {topAlbum.map((album) => (
              <Card cardDetails={album} type={"album"} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
