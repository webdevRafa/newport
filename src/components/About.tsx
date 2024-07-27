import devrafa from "../assets/devrafapng.png";
export const About: React.FC = () => {
  return (
    <>
      <div className="bg-black-600 p-2 sticky top-0">
        <h1 className="text-red">
          dev<span className="text-white">rafa</span>
        </h1>
      </div>
      <div className="mt-20 flex flex-col md:flex-row justify-between gap-5 w-[90%] max-w-[800px] mx-auto">
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center justify-center">
            <div className="p-5 cursor-pointer text-off-white transition duration-150 ease-in-out hover:scale-110">
              <h1 className="text-left text-3xl mb-2 font-zain">
                <span className="text-red">welcome</span> to my page
              </h1>
              <p className="font-light">
                My name is Rafa and I am a passionate web developer.
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

      <div className="mt-20 text-off-white mx-auto w-[90%] max-w-[1200px] flex justify-center">
        <div className="cursor-pointer transition duration-150 ease-in-out hover:scale-110">
          <p className="text-sm md:text-1xl mb-2 md:mb-0">
            I create interactive and responsive websites suitable for a variety
            of needs.
          </p>
          <p className="text-sm md:text-1xl">
            Whether you simply need a digital broshure to show your services or
            a back-end to store user info, I got you covered.
          </p>
        </div>
      </div>
    </>
  );
};
