import React from "react";
import lounge1 from "../assets/bankkaro/lounge1.png"; // Replace with your image paths
import lounge2 from "../assets/bankkaro/lounge2.png";
import lounge3 from "../assets/bankkaro/lounge3.png";
import lounge_icon1 from "../assets/bankkaro/lounge_icon1.png";
import lounge_icon2 from "../assets/bankkaro/lounge_icon2.png";
import lounge_icon3 from "../assets/bankkaro/lounge_icon3.png";
import tryLounge from "../assets/bankkaro/tryLounge.png";
import ratan from "../assets/bankkaro/ratan.png"
import Button from "../commonComponents/Button";
import Image from "../commonComponents/Image";
import Text from "../commonComponents/Text";

const LoungeFinder = () => {
  const lounges = [
    {
      image: lounge1,
      title: "Indra Gandhi Int'l",
      location: "IGI • New Delhi",
    },
    {
      image: lounge2,
      title: "Indra Gandhi Int'l",
      location: "IGI • New Delhi",
    },
    {
      image: lounge3,
      title: "Indra Gandhi Int'l",
      location: "IGI • New Delhi",
    },
  ];

  return (
    <div className="bg-black text-white py-10 ">
      <Text tag={"h2"} classes="text-4xl font-semibold text-center mb-4 text-center text-md sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl" text={"Lounge Finder"}/>
      <Text classes="text-center text-lg mb-10" text={" Check which lounges you can access at a click!"} />
      <div className="flex justify-center mb-20">
        <Button text={"Try Lounge Finder"} classes="w-60" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {lounges.map((lounge, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="flex">
              <Image
                url={
                  index == 1
                    ? lounge_icon1
                    : index == 2
                    ? lounge_icon2
                    : lounge_icon3
                }
                classes="w-12 h-12 object-cover mb-10 rounded-full"
              />
              <div className="ml-2">
                <Text className="text-white" text={lounge.title} />
                <Text className="text-lightGray text-xs" text={lounge.location} />
              </div>
            </div>
            <Image
              url={lounge.image}
              alt={lounge.title}
              classes=" object-cover mb-4 rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoungeFinder;
