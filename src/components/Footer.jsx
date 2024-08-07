import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import googlePlay from "../assets/bankkaro/google_play.png";
import appStore from "../assets/bankkaro/app_store.png";
import lastBtn from "../assets/bankkaro/lastbtn.png";
import Button from "../commonComponents/Button";
import Text from "../commonComponents/Text";
import FooterItems from "../commonComponents/FooterItems";

const Footer = () => {
  const footerData = {
    COMPANY: [
      { id: 1, text: "About BankKaro", link: "#" },
      { id: 2, text: "Vision and Mission", link: "#" },
      { id: 3, text: "Our Team Members", link: "#" },
      { id: 4, text: "About BankKaro", link: "#" },
      { id: 5, text: "Partners and Investors", link: "#" },
    ],
    BLOG: [
      { id: 1, text: "BankKaro Savings", link: "#" },
      { id: 2, text: "Cashless Makes Perfect", link: "#" },
      { id: 3, text: "BankKaro No Interest", link: "#" },
      { id: 4, text: "BankKaro Digital Wallet", link: "#" },
    ],
    FEATURES: [
      { id: 1, text: "Card Genius", link: "#" },
      { id: 2, text: "Lounge Finder", link: "#" },
      { id: 3, text: "Beat My Card", link: "#" },
      { id: 4, text: "Compare Cards", link: "#" },
    ],
    CONTACT: [
      { id: 1, text: "Contact Us", link: "#" },
      { id: 2, text: "Contact Support", link: "#" },
    ],
    LEGAL: [
      { id: 1, text: "Terms", link: "#" },
      { id: 2, text: "Privacy", link: "#" },
    ],
  };

  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20 ">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 flex flex-col mb-10 md:mb-0">
          <div className="flex space-x-4 mb-4">
            <FaTwitter className="text-white text-2xl" />
            <FaInstagram className="text-white text-2xl" />
          </div>
          <Text
            tag="p"
            text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar. Fusce id mollis ex.`}
            classes="text-silverText mb-4"
          />
          <div className="flex space-x-4 mb-4">
            <Button icon={appStore} text={"App Store"} classes={"w-44"} />
            <Button icon={googlePlay} text={"Google Play"} classes={"w-44"} />
          </div>
          <div className="border-t-2 border-gray mb-10 mt-4"></div>
          <Text
            tag="p"
            text={`  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar. Fusce id mollis ex.`}
            classes="text-gray-400"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-around">
            <FooterItems
              data={{
                COMPANY: footerData["COMPANY"],
                BLOG: footerData["BLOG"],
                FEATURES: footerData["FEATURES"],
              }}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between md:mt-14">
            <div className="flex flex-col md:flex-row justify-around w-full md:w-1/2">
              <FooterItems
                data={{
                  CONTACT: footerData["CONTACT"],
                  LEGAL: footerData["LEGAL"],
                }}
              />
            </div>
            <div className="h-full flex flex-col justify-end">
              <div className="flex px-10  h-12 flex-col justify-center  rounded-full text-sm text-creamText bg-gradient-to-r from-[#262524] to-[#30302e] items-center">
                <div className="text-right mr-0 ml-auto ">
                  {" "}
                  &#169;
                  <Text tag="span" classes="" text={` Copyright 2024`} />
                </div>
                <Text classes="" text={` Powered By Pouring Pounds`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};



export default Footer;
