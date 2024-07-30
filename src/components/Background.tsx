import React from "react";

export const Background: React.FC = () => {
  return (
    <div className="relative z-0">
      <div className="fixed top-0 left-0 w-full h-[100vh] z-0 opacity-[10%] blur-sm img-bg"></div>
    </div>
  );
};
