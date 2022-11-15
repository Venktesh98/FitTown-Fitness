import React from "react";
import { ImageList } from "../../Services/ImageList";
import { Box } from "@mui/system";
import LazyLoadImages from "./LazyLoadImages";

const styles = {
  heading: {
    textAlign: "center",
    fontSize: "40px",
    color: "#f5634b",
    fontWeight: 700,
    margin: "3% 0 0.2% 0",

    // border:"1px solid black"
  },
  galleryImage: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    mt: "2%",
  },
  lazyLoadImagesContainer: {
    margin: "0.5% 1% 0 0",
    position: "relative",
    zIndex: 1,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",

    "&:hover": {
      cursor: "pointer",
      opacity: 0,
    },
  },
};

const Gallery = () => {
  const imageLists = ImageList;

  return (
    <section id="gallery">
      <Box sx={{ ...styles.heading }}>Gallery</Box>
      <Box sx={{ ...styles.galleryImage }}>
        {imageLists?.map((image) => (
          <Box key={image.id} sx={{ ...styles.lazyLoadImagesContainer }}>
            <Box sx={{ ...styles.overlay }} />
            <LazyLoadImages
              height={410}
              width={455}
              effect="opacity"
              src={image.image}
              alt={"No Image"}
            />
          </Box>
        ))}
      </Box>
    </section>
  );
};

export default Gallery;
