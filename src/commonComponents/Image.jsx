import React from "react";

const Image = ({ url = "", styles = {}, classes = "", alt = "" }) => {
  return <img className={classes} style={styles} src={url} alt={alt} />;
};

export default Image;
