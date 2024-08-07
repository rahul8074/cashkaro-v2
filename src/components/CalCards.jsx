import React from "react";
import kundli from "../assets/bankkaro/kundaliupper.png";
import beat from "../assets/bankkaro/beatupper.png";
import compare from "../assets/bankkaro/compareupper.png";
import lounge from "../assets/bankkaro/loungeupper.png";
import bg from "../assets/bankkaro/kundalibg.png";
import Offers from "./Offers";
import offer1 from "../assets/bankkaro/offer1.png";
import offer2 from "../assets/bankkaro/offer2.png";
import offer3 from "../assets/bankkaro/offer3.png";
import offer4 from "../assets/bankkaro/offer4.png";

export const CalCards = () => {
  const offerDataCards = [
    {
      image: offer1,
      title: "Personalised Offers",
      desc: "Find best Credit Cards based on your spend pattern",
    },
    {
      image: offer2,
      title: "Earn Rewards",
      desc: "Earn Rewards for every successful Credit Card approval",
    },
    {
      image: offer3,
      title: "Compare Cards",
      desc: "Compare your existing Cards with best in the industry",
    },
    {
      image: offer4,
      title: "Max Benifits",
      desc: "Get maximum benefits from your Credit Cards",
    },
  ];

  const offerData = [
    {
      id: 1,
      background: bg,
      text: "Card Kundali",
      image: kundli,
    },
    {
      id: 2,
      background: bg,
      text: "Beat My Card",
      image: beat,
    },
    {
      id: 3,
      background: bg,
      text: "Compare Cards",
      image: compare,
    },
    {
      id: 4,
      background: bg,
      text: "Lounge Finder",
      image: lounge,
    },
  ];
  return (
    <div className="">
      <div className="bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offerDataCards.map((item, ind) => {
          return (
            <div key={ind}>
              <Offers image={item.image} title={item.title} desc={item.desc} />
            </div>
          );
        })}
      </div>
      <div className="bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center pt-20  mx-auto">
        {offerData.map((item, ind) => {
          return (
            <div key={ind} className="mx-4">
              <Offers data={item} imgStyle="w-60 h-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
