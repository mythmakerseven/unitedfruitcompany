import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ListedPost } from "../../lib/types";
import { Box } from "./ImageBox.styles";

interface Props {
  activePost: ListedPost;
}

const ImageBox: React.FC<Props> = ({ activePost }) => {
  const [opacity, setOpacity] = useState(0);
  const [currentImage, setCurrentImage] = useState(activePost.featured_image);

  // Keep track of whether we're waiting for a timeout to finish.
  // This prevents flashing images when the user quickly scrolls.
  const timeoutRef = useRef<null | number>(null);

  useEffect(() => {
    const transition = () => {
      if (activePost.featured_image) {
        setCurrentImage(activePost.featured_image);
        setOpacity(1);
      }
    };

    // Clear any existing timeout
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    setOpacity(0);
    timeoutRef.current = window.setTimeout(() => transition(), 400);

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [activePost]);

  return (
    <Box backgroundurl={`${currentImage}?w=800`} opacity={opacity}>
      <Link href={`/timeline/${activePost.slug}`}>See more &#10132;</Link>
    </Box>
  );
};

export default ImageBox;
