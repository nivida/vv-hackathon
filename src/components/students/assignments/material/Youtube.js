import * as React from "react";
import {useDimensions} from "../../../../hooks/useDimensions";

const Youtube = ({material}) => {

  const [ref, {width}] = useDimensions({liveMeasure: true});

  return (
    <div ref={ref} style={{width: '100%'}}>
      {width && <iframe width={width} height={width * 2 / 3} src={`https://www.youtube.com/embed/${material.videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>}
    </div>
  )
};

export default Youtube;
