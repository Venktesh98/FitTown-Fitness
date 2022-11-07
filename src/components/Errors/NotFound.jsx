import React from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/assets/errors/404.jpg"}
        alt=""
        className={styles["not-found"]}
      />
    </div>
  );
};

export default NotFound;
