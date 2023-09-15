import React from "react";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { Search } from "../Search/Search";
import styles from "./Navbar.module.css";

export const Navbar = ({ searchData = [] }) => {
  return (
    <div className={styles.navbar}>
      {/* <Link to="/"> */}
      <Logo />
      {/* </Link> */}
      <Search />
      <Button type="btn-secondry">Give Feedback</Button>
    </div>
  );
};

//cafc rafc
