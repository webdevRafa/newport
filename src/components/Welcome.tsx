import devrafa from "../assets/rafas.svg";

export const Welcome: React.FC = () => {
  return (
    <>
      {/* WELCOME TO MY PAGE */}
      <div className="z-40 relative mt-20 flex flex-col md:flex-row justify-between gap-5 w-[90%] max-w-[800px] mx-auto">
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center justify-center">
            <div className="p-5 cursor-pointer text-off-white transition duration-150 ease-in-out md:hover:scale-110">
              <h1 className="text-left text-3xl mb-2 font-zain">
                <span className="animate-pulse text-red md:text-5xl">
                  welcome
                </span>{" "}
                to my page
              </h1>
              <p className="font-light">
                Hey, I'm Rafa, a web developer who's all about crafting awesome
                online experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <img
            className="cursor-pointer w-full transition"
            src={devrafa}
            alt=""
          />
        </div>
      </div>

      <div className="relative z-40 mt-5 text-off-white mx-auto w-[90%] max-w-[1200px] flex justify-center">
        <div className="flex justify-start cursor-pointer transition duration-150 ease-in-out md:hover:scale-110">
          <p className="text-sm md:text-2xl mb-2 md:mb-0 font-light">
            I have a passion for transforming cool ideas into stunning websites.
            Whether I'm designing a sleek site for a local business or
            developing a complex web app, I dedicate myself fully to every
            project.
          </p>
        </div>
      </div>
    </>
  );
};
