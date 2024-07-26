import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.svg";
import firebaseLogo from "../assets/firebase.svg";

export const Tech: React.FC = () => {
  let technologies = [
    {
      src: reactLogo,
      name: "React",
      text: "React is a JavaScript library for building user interfaces, particularly single-page applications where you can manage the view layer for web and mobile apps. React allows developers to create reusable UI components that make the code easier to manage and maintain.",
    },
    {
      src: firebaseLogo,
      name: "Firebase",
      text: "Firebase is a platform developed by Google for creating mobile and web applications. It offers a variety of tools and services, such as authentication, real-time database, cloud storage, and hosting, which streamline backend development and allow for real-time data updates.",
    },
    {
      src: tailwindLogo,
      name: "Tailwindcss",
      text: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without writing any CSS. It allows developers to style applications directly in their markup, promoting a more streamlined and consistent approach to styling.",
    },
  ];

  return (
    <>
      <div className="mt-20 w-[90%] max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-10 mx-auto">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="hover:scale-105 cursor-pointer bg-black-600 p-5 w-full shadow-sm transition duration-200 ease-in-out  hover:bg-black-400 flex-grow hover:flex-grow-2"
          >
            <h1 className="text-off-white text-center">{tech.name}</h1>
            <img className="w-[100px] mx-auto" src={tech.src} alt="" />
            <p className="p-3 text-off-white text-sm">{tech.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};
