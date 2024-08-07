import React from "react";
import background from "../assets/bankkaro/backbg.png";
import temple from "../assets/bankkaro/temple.png";
import text from "../assets/bankkaro/text.png";
import card1 from "../assets/bankkaro/card1.png";
import card2 from "../assets/bankkaro/card2.png";
import card3 from "../assets/bankkaro/card3.png";
import bottomImg from "../assets/bankkaro/bottomImg.png";
import compareCardBtn from "../assets/bankkaro/compareCardBtn.png";
import Button from "../commonComponents/Button";
import Image from "../commonComponents/Image";
import Text from "../commonComponents/Text";
import { video2 } from "../data/videos";
import Video from "../commonComponents/Video";

const CompareCards = () => {
  return (
    <div className="bg-black py-10 md:py-20 ">
      <div className="relative">
        <div className="relative ">
        <Video
          classes="relative w-full object-cover clip-top clip-bottom h-[60vh] rounded-b-lg clip-path-arc-top"
          autoPlay={true}
          loop={true}
          muted={true}
          url={video2}
          type="video/mp4"
        />
          <Image
            url={temple}
            classes="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
            alt="Temple"
          />
          <Text
            text="Compare Cards"
            classes="absolute textOutline -top-20 bg-gradient-to-b from-creamText via-black to-creamText bg-clip-text text-transparent left-0 right-0 mx-auto w-full text-center text-9xl stroke-white font-bold"
          />

          <div className="flex justify-center absolute bottom-10 md:bottom-40 left-1/2 transform -translate-x-1/2 space-x-2 md:space-x-4">
            <Image url={card1} classes="h-20 md:h-32" alt="Card 1" />
            <Image url={card2} classes="h-20 md:h-32" alt="Card 2" />
            <Image url={card3} classes="h-20 md:h-32" alt="Card 3" />
          </div>
          <Image url={bottomImg} classes="w-full" alt="Bottom Image" />
        </div>
      </div>
      <div className=" text-center mt-10 text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl">
        <Text
          text={
            "Uncover hidden benefits and find the perfect card for your financial goals."
          }
          classes="w-2/5 mx-auto text-4xl"
        />
      </div>
      <div className="w-full flex justify-center mp-10">
        <Button classes="cursor-pointer mt-4 w-60" text="Compare Card" />
      </div>
    </div>
  );
};

export default CompareCards;
