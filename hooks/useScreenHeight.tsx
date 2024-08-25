import { useEffect, useState } from "react";

const useScreenHeight = () => {
  // Use screen.height for iOS because of the nonsense with their navbar.
  const [screenHeight, setScreenHeight] = useState<null | number>(null);

  useEffect(() => {
    // Test for Apple devices
    if (
      /iPad|iPhone|iPod|iOS|Android/.test(navigator.userAgent) ||
      (/Macintosh/i.test(navigator.userAgent) &&
        navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 1)
    ) {
      setScreenHeight(window.screen.height);
    }
  }, []);

  if (screenHeight) {
    return screenHeight;
  } else if (typeof window !== "undefined") {
    return window.innerHeight;
  } else {
    return 0;
  }
};

export default useScreenHeight;
