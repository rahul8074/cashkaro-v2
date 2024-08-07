import React, { useState } from "react";
import hdfcBank from "../assets/bankkaro/hdfc_bank.png";
import axisBank from "../assets/bankkaro/axis_bank.png";
import Text from "../commonComponents/Text";
import Button from "../commonComponents/Button";
import CreditCardCat from "./CreditCardCat";

const cards = [
  { img: hdfcBank, title: "HDFC Regalia", applyLink: "#" },
  { img: axisBank, title: "Axis Bank Ace Credit Card", applyLink: "#" },
  { img: hdfcBank, title: "Indian Oil HDFC Credit Card", applyLink: "#" },
];

const cardTypes = [
  { id: 1, title: "Featured" },
  { id: 2, title: "Cashback" },
  { id: 3, title: "Rewards" },
  { id: 4, title: "Fuel" },
  { id: 5, title: "Business" },
];

const CreditCard = () => {
  const [selected, setSelected] = useState(1);

  function handleClick(id) {
    setSelected(id);
  }

  return (
    <div className="bg-black py-10 flex flex-wrap justify-center ">
      <div className="text-center text-md sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl">
        <Text
          tag="p"
          classes="w-[60%] mx-auto"
          text={"Popular credit cards for every dedicated category "}
        />

        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1  text-sm justify-center mt-10 w-1/2 mx-auto ">
          {cardTypes.map((item) => {
            return (
              <Button
                handleClick={() => handleClick(item.id)}
                text={item.title}
                key={item.id}
                textColor={item.id == selected ? "#000000" : "#ffffff"}
                classes="mx-2"
                innerBackGroundColor={
                  item.id == selected ? "#ffffff" : "#000000"
                }
              />
            );
          })}
        </div>
      </div>
      <CreditCardCat cards={cards} />
    </div>
  );
};

export default CreditCard;
