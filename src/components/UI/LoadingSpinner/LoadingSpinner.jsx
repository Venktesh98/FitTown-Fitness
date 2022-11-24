import React from "react";
import { BallTriangle } from "react-loader-spinner";
import styles from "./LoadingSpinner.module.css";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoadingSpinner = () => {
  return (
    <div className={styles["spinner-container"]}>
      <div className={styles["spinner-module"]}>
        <BallTriangle
          height={200}
          width={200}
          radius={4}
          color="#f5634b"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
