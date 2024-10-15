import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const changeWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWindowWidth);

    return () => {
      window.removeEventListener("resize", changeWindowWidth);
    };
  }, []);

  return windowWidth;
}
