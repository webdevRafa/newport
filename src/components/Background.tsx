import React from "react";
import pcRoom from "../assets/pc-room.jpg";
export const Background: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] z-10 opacity-[10%] blur-sm">
      <img src={pcRoom} alt="" />
    </div>
  );
};
