import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const LazyLoadImages = ({ src, effect, width, height }) => {
  return (
    <React.Fragment>
      <LazyLoadImage
        src={src}
        width={width}
        height={height}
        effect={effect}
        aspect-ratio={0}
      />
    </React.Fragment>
  );
};

export default trackWindowScroll(LazyLoadImages);
