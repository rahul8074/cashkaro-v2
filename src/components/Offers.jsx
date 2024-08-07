import React from "react";
import Text from "../commonComponents/Text";
import Image from "../commonComponents/Image";

const Offers = ({ image, title = "", desc = "", data = {}, imgStyle = "" }) => {
  return (
    <>
      {" "}
      {Object.keys(data).length > 0 ? (
        <div className="z-40 relative">
          <Image url={data.background} classes={`h-32 w-32  ${imgStyle}`} />
          {data.text && (
            <Text
              tag="h1"
              classes="absolute z-50 top-20 left-0 right-0 w-32 mx-auto text-center text-4xl"
              text={data.text}
            />
          )}
          <Image
            url={data.image}
            classes={`h-32 w-32 absolute bottom-0 h-40  ${imgStyle}`}
          />
        </div>
      ) : (
        <div className="mx-auto flex flex-col items-center">
          <Image url={image} classes={`h-32 w-32 ${imgStyle}`} />
          {title && <Text tag="h1" classes="mt-2" text={title} />}
          {desc && <Text text={desc} classes="text-lightGray w-40 mt-2" />}
        </div>
      )}
    </>
  );
};

export default Offers;
