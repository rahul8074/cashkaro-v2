import React from "react";
import arrow from "../assets/bankkaro/Arrow.png";
import Image from "../commonComponents/Image";
import Text from "../commonComponents/Text";
const CreditCardCat = ({ cards }) => {
  return (
    <div className="py-10 flex flex-wrap justify-center">
      {cards.map((card, ind) => {
        return (
          <div key={ind} className="p-4 flex flex-col">
            <Image url={card.img} classes="h-80" />
            <div className="ml-14 -mt-16">
              <Text
                tag="h3"
                classes="text-lg font-bold mt-2"
                text={card.title}
              />

              <div className="flex font-bold mt-2 " style={{ fontSize: "8px" }}>
                <Text
                  classes="text-xs text-creamText mr-2 px-2 py-1  bg-gradient-to-r from-[#262524] to-[#30302e]"
                  text={"TRAVEL"}
                />
                <Text
                  classes="text-xs text-creamText mr-2 px-2  py-1 bg-gradient-to-r from-[#262524] to-[#30302e]"
                  text={"ONLINE SHOPPING"}
                />
              </div>
              <Text classes="text-white mt-2" tag="p" text={"50% Cashback"} />
              <Text
                classes="text-white mt-2"
                tag="p"
                text={" High cashback on online and offline spends"}
              />
              <div
                onClick={() => handleClick(card.applyLink)}
                className="mt-2 flex items-center text-creamText hover:text-silverText"
              >
                <Text text={"Apply Now"} />
                <Image url={arrow} classes="h-6" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CreditCardCat;
