import React from "react";

import styles from "./Sections.module.css";
import { fetchAlbumData, fetchFilters, fetchSongsData } from "../../apis/api";
import { Section } from "../Section/Section";

export const Sections = ({ albums }) => {
  console.log(albums);
  return (
    <div>
      <div className={styles.album_container}>
        <Section
          title="Top Album"
          dataSourse={albums.topAlbum}
          dataType="top"
          sectionType="album"
        />
        <Section
          title="New Album"
          dataSourse={albums.newAlbum}
          dataType="new"
          sectionType="album"
        />
      </div>
      <div className={styles.songs_container}>
        <Section
          title="Songs"
          dataSourse={albums.songs}
          sectionType="song"
          filterSource={fetchFilters}
        />
      </div>
    </div>
  );
};
