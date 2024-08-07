import React from "react";

const Video = ({
  url = "",
  type = "video/mp4",
  classes,
  styles = {},
  muted = "",
  autoPlay = "",
  loop = "",
}) => {
  return (
    <video
      className={classes}
      style={styles}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
    >
      <source src={url} type={type} />
    </video>
  );
};

export default Video;
