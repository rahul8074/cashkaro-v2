import React from "react";
import Video from "../commonComponents/Video";
import { video3 } from "../data/videos";
import Text from "../commonComponents/Text";
import Image from "../commonComponents/Image";
import RatanTata from "../assets/bankkaro/ratanTata.png";
import RatanTataShadow from "../assets/bankkaro/ratanTataShadow.png";
const ImpactCard = () => {
  return (
    <div className="relative">
      <Video
        classes=""
        autoPlay={true}
        loop={true}
        muted={true}
        url={video3}
        type="video/mp4"
      />
      <div className="absolute top-0 h-full w-full  pt-24">
        <Text
          tag="p"
          classes="text-black text-center text-2xl"
          text={"WHAT THEY SAY ABOUT BANKKARO"}
        />
        <div className="text-center text-7xl">
          {" "}
          <Text tag="span" classes="text-black text-center" text={"See the "} />
          <Text
            tag="span"
            classes="text-center text-creamText"
            text={"Impact"}
          />
          <Text
            tag="span"
            classes="text-black text-center"
            text={" in action"}
          />
        </div>
        <Image url={RatanTata} classes="absolute ratanTata left-0 bg-white right-0 bottom-60 mx-auto w-80 mix-blend-multiply" />
        <Image url={RatanTataShadow} classes="absolute left-0 right-0 bottom-56 mx-auto w-[50%] "/>
        <div className="flex justify-between mx-24 -mt-40 h-full items-center">
          <div className="">
            <Text classes="text-black text-6xl" text={"Ratan Tata"} />
            <Text
              classes="text-black text-2xl text-creamText"
              text={"Chairperson Tata Group"}
            />
          </div>
          <Text
            classes="text-black w-[20%] text-center"
            text={
              "“ BankKaro helped me find the perfect credit card that matches my spending on groceries and travel. Highly recommend it for personalized credit card options. “"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ImpactCard;
