import React from "react";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.svg";
import firebaseLogo from "../assets/firebase.svg";

export const Tech: React.FC = () => {
  const technologies = [
    {
      src: reactLogo,
      name: "React",
      secret: "You're gay",
      text: "React is a JavaScript library for building user interfaces, particularly single-page applications where you can manage the view layer for web and mobile apps. React allows developers to create reusable UI components that make the code easier to manage and maintain.",
    },
    {
      src: tailwindLogo,
      name: "Tailwindcss",
      text: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without writing any CSS. It allows developers to style applications directly in their markup, promoting a more streamlined and consistent approach to styling.",
    },
    {
      src: firebaseLogo,
      name: "Firebase",
      text: "Firebase is a platform developed by Google for creating mobile and web applications. It offers a variety of tools and services, such as authentication, real-time database, cloud storage, and hosting, which streamline backend development and allow for real-time data updates.",
    },
  ];

  return (
    <div className="z-40 relative my-20 w-[90%] max-w-[1200px] mx-auto techs">
      <h2 className="text-off-white text-2xl mb-2 font-orbitron font-bold">
        MY <span className="text-red">STACK</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="border-4 cards hover:scale-105 cursor-pointer bg-black-600 p-5 w-full shadow-sm transition duration-200 ease-in-out  flex-grow hover:flex-grow-2"
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            <h1 className="text-off-white text-center">{tech.name}</h1>
            <img className="w-[100px] mx-auto" src={tech.src} alt={tech.name} />
            <p className="p-3 text-off-white text-sm">{tech.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
