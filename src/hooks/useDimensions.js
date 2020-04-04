import {useCallback, useLayoutEffect, useState} from "react";
import {throttle} from "lodash";

export const useDimensions = ({liveMeasure = true, throttleTime = 250}) => {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState(null);

  const ref = useCallback(node => setNode(node), []);

  useLayoutEffect(() => {
    if (node) {
      const measure = throttle(() =>
          window.requestAnimationFrame(() =>
            setDimensions(node.getBoundingClientRect().toJSON())
          )
        , throttleTime);
      measure();

      if (liveMeasure) {
        window.addEventListener("resize", measure);

        return () => {
          window.removeEventListener("resize", measure);
        };
      }
    }
  }, [node, liveMeasure, throttleTime]);

  return [ref, dimensions, node];
};
