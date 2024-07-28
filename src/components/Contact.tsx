import { useState } from "react";
import contact from "../assets/contact.svg";
import { XMarkIcon } from "@heroicons/react/20/solid";

export const Contact: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const handleToggle = () => {
    setMenu((prevMenu) => !prevMenu);
    console.log(menu);
  };
  return (
    <>
      <div className="w-[90%] max-w-[1000px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between py-[100px] gap-1.5">
        <div className="text-off-white md:px-10">
          <h1 className="font-bold mb-2 text-2xl">What I can do for you</h1>
          <p className="font-light mb-2">
            From sleek, responsive websites to robust web applications, I offer
            a range of services tailored to your needs. Here's how I can help:
          </p>
          <ul className="pl-3 mb-5 md:mb-0">
            <li className="my-1.5 text-sm">
              <span className="text-red">Digital Brochures</span>: Perfect for
              showcasing your services with style.
            </li>
            <li className="text-sm">
              <span className="text-red">Full Websites</span>: Dynamic and
              interactive sites powered by Firebase for all your data needs.
            </li>
          </ul>
        </div>
        <div
          onClick={handleToggle}
          className="md:hover:scale-110 transition duration-150 ease-in-out cursor-pointer hover:border hover:border-red"
        >
          <img className="w-[300px]" src={contact} alt="" />
        </div>
      </div>

      {menu && (
        <div className="font-zain fixed top-[10%] ml-[50%] translate-x-[-50%] w-[90%] h-[500px] max-w-[1000px] bg-black-600 border-red border-2">
          <div className="flex items-center justify-between px-10 py-2 mb-10">
            <h1 className="font-zain text-off-white text-1xl">CONTACT</h1>
            <XMarkIcon
              onClick={handleToggle}
              className="size-6 cursor-pointer text-red"
            />
          </div>

          <div className="w-full flex items-center justify-center">
            <div>
              <form action="">
                <span className="flex items-center justify-between gap-1.5 mb-1.5">
                  <label className="text-white" htmlFor="name-input">
                    Name
                  </label>
                  <input className="bg-off-white" type="text" id="name-input" />
                </span>
                <span className="flex items-center justify-between gap-1.5 mb-1.5">
                  <label className="text-white" htmlFor="email-input">
                    Email
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    className="bg-off-white"
                  />
                </span>
                <span className="flex items-center justify-between gap-1.5 mb-1.5">
                  <label htmlFor="text-input" className="text-white">
                    Message
                  </label>
                  <textarea
                    className="bg-off-white w-full"
                    name="text-input"
                    id="text-input"
                  ></textarea>
                </span>
                <span className="flex justify-end">
                  <button className="bg-red px-2 font-bold" type="submit">
                    send
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
