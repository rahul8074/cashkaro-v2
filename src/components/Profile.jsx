import React from "react";
import profilePhoto from "../assets/bankkaro/profile.png";
import signIn from "../assets/bankkaro/button.png"
import Button from "../commonComponents/Button";

const Profile = () => {
  return (
    <div className="flex items-center relative rounded-xl cursor-pointer">
       <Button text={"Sign In"} />
    <img
          src={profilePhoto}
          alt="Avatar"
          className="absolute w-16 h-16 rounded-full  border-4 border-lightGray -right-12"
        />
    </div>
  );
};

export default Profile;
