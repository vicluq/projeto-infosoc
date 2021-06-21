import React from "react";
import { Slider } from "./styles";

const SliderInput = ({ value, onChange, track_color, thumb_color, label }) => {
  const render_track = (props, state) => <div></div>;
  const render_thumb = (props, state) => <div></div>;
  return (
    <div>
      <h3>{label}</h3>
      <Slider
        value={value}
        renderTrack={render_track}
        renderThumb={render_thumb}
        onChange={onChange}
      />
    </div>
  );
};

export default SliderInput;
