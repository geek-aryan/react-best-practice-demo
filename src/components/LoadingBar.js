import React from "react";
import LoadingBar from "react-top-loading-bar";

const CustomLoadingBar = ({ progress, setProgress }) => {
  return (
    <LoadingBar
      color="#f11946"
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
  );
};

export default CustomLoadingBar;
