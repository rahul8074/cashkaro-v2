import React from "react";

const Text = ({text = "", tag = "", styles = {}, classes = "" }) => {
  const Tag = tag || "div"
  return (
    <Tag  style={styles} className={classes}>
      {text}
    </Tag>
  );
};

export default Text;
