import React from "react";
import Image from "./Image";
import "./styles/button.css";
import Text from "./Text";
const Button = ({
  handleClick = {},
  text = "",
  fontSize = "",
  icon = "",
  textColor = "#f6dcb6",
  classes = "",
  styles = {},
  innerBackGround = "linear-gradient(to right, #262524, #30302e)",
  innerBackGroundColor = "",
  key = "",
}) => {
  if (innerBackGroundColor) {
    innerBackGround = "";
  }
  classes = classes + "cursor-pointer";

  return (
    <div
      onClick={handleClick}
      className={`${classes} btn-outer`}
      style={styles}
      key={key}
    >
      <div
        className="btn-inner px-6"
        style={{
          color: textColor,
          fontSize: fontSize,
          background: innerBackGround,
          backgroundColor: innerBackGroundColor,
        }}
      >
        {icon && (
          <Image
            styles={{ width: "20px", height: "20px", marginRight: "10px" }}
            url={icon}
          />
        )}
        <Text text={text} />
      </div>
    </div>
  );
};

export default Button;
