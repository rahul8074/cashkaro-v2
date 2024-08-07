import React from "react";
import background from "../assets/bankkaro/upperbg.svg";
import findCreditCardbtn from "../assets/bankkaro/findCreditCardbtn.png";
import hdfcCreditCard from "../assets/bankkaro/hdfc_bank.png";

import Offers from "./Offers";
import { video1 } from "../data/videos";
import Text from "../commonComponents/Text";
import Image from "../commonComponents/Image";
import Button from "../commonComponents/Button";
import Video from "../commonComponents/Video";
import LowerBorder from "../assets/bankkaro/lowerBorder.png"

const Trending = () => {
 

  return (
    <div className="bg-black">
      <div className="relative h-full max-h-screen overflow-hidden trending">
        
        <Image
          url={background}
          alt={"background"}
          classes="bg-white"
        />


        <Video
          classes=" video1 bottom-0  min-h-screen w-[60%] absolute right-0 bottom-0"
          autoPlay={true}
          loop={true}
          muted={true}
          url={video1}
          type="video/mp4"
        />

        <div className="absolute text-md sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl top-10 sm:top-1/6 md:top-1/4 lg:top-1/4 left-5 md:left-10 lg:left-20 xl:left-40 space-y-2">
          <Text
            text={"We find the Best Credit Cards for you"}
            classes="w-[60%]"
          />
          <Button
            classes="mt-10 w-60 content-fit h-10 cursor-pointer object-fit"
            fontSize="20px"
            text={"Find a Credit Card"}
          />
        </div>

        <Image
          url={hdfcCreditCard}
          classes="absolute right-0 md:right-20 lg:right-40 top-0 md:top-0 lg:top-20 xl:top-20 h-40 md:h-60 lg:h-80 xl:h-80"
          alt="HDFC Credit Card"
        />
      </div>
    </div>
  );
};

export default Trending;
