import { useState, useEffect } from "react";

/**
 * Custom hook  useMediaQuery.
 * @param query - CSS media query.
 * @returns {boolean} - Return true, if current window size is equal to media query.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }

      const listener = () => {
        setMatches(media.matches);
      };

      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }
  }, [matches, query]);

  return matches;
}

export default useMediaQuery;
