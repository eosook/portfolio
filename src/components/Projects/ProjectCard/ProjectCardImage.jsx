import { motion } from "framer-motion";
import { useState } from "react";

var imageAnimation = {}

export default function ProjectCardImage({ image, expanded, isMobile, isTablet }) {
  const [imageClicked, setImageClicked] = useState(false);

  if(isMobile){
    imageAnimation = {
      moveUp: { translateY: -220, transition: { type: "spring", dampness: 0.2, bounce: 0.25, duration: 0.5 } },
    }
  } else if (isTablet){
    imageAnimation = {
      moveUp: { translateY: -300, scale: 1.2, transition: { type: "spring", dampness: 0.2, bounce: 0.25, duration: 0.5 } },
    }
  } else {
    imageAnimation = {
      moveUp: { translateY: -300, scale: 1.2, transition: { type: "spring", dampness: 0.2, bounce: 0.25, duration: 0.5 } },
    }
  }
  function moveImage(){
    if (expanded){
      setImageClicked(!imageClicked);
    }
  }
  return (
    <motion.img
      className={
        expanded
          ? "project-card__image project-card__image-expanded"
          : "project-card__image"
      }
      onClick={moveImage}
      variants={imageAnimation}
      animate={imageClicked ? expanded ? 'moveUp' : { translateY: -30 }: ""}
      // whileHover={{ scale: 1.05 }}
      src={image}
      alt="Project Screenshot"
    />
  );
}
