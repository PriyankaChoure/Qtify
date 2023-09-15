import React from "react";
import styles from "../Search/Search.module.css";
// import { styled } from "@mui/system";

export const Search = () => {
  return (
    <div style={{ position: "relative" }}>
      <form className={styles.search_box} onSubmit={() => {}}>
        <input
          className={styles.search_input}
          placeholder="Enetr search option"
          required
        />

        <button className={styles.search_button} type="submit">
          <img src={require("../../assets/Search_icon.png")} alt="search" />
        </button>
      </form>
    </div>
  );
};
