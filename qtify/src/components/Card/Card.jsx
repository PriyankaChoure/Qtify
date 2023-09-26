import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { Tooltip } from "@mui/material";

export const Card = ({ cardDetails, type }) => {
  // console.log(cardDetails);
  const getCard = (type) => {
    switch (type) {
      case "album": {
        return (
          // <Link to={`/album/${cardDetails.slug}`} className={styles.link}>
          <Tooltip
            title={`${cardDetails.songs.length} songs`}
            placement="top"
            arrow
          >
            <div className={styles.container}>
              <div className={styles.image_container}>
                <img
                  src={`${cardDetails.image}`}
                  alt="card"
                  className={styles.image}
                />
                {/* <div className={styles.followers}> */}
                <div className={styles.Follower_text}>
                  {cardDetails.follows} Follows
                </div>
                {/* </div> */}
              </div>
              <p className={styles.title}>{cardDetails.title}</p>
            </div>
          </Tooltip>
          // </Link>
        );
      }
      case "song": {
        return (
          // <Link to={`/album/${cardDetails.slug}`} className={styles.link}>
          <div className={styles.container}>
            <div className={styles.image_container}>
              <img
                src={`${cardDetails.image}`}
                alt="card"
                className={styles.image}
              />
              <div className={styles.followers}>
                <span className={styles.Follower_text}>
                  {cardDetails.likes} Likes
                </span>
              </div>
            </div>
            <p className={styles.title}>{cardDetails.title}</p>
          </div>
          // </Link>
        );
      }
      default: {
        return <></>;
      }
    }
  };

  return getCard(type);
};
