import contact from "../assets/contact.svg";
export const Contact: React.FC = () => {
  return (
    <div className="w-[90%] max-w-[1000px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between py-[100px] gap-1.5">
      <div className="text-off-white md:px-10">
        <h1 className="font-bold mb-2 text-2xl">What I can do for you</h1>
        <p className="font-light mb-2">
          From sleek, responsive websites to robust web applications, I offer a
          range of services tailored to your needs. Here's how I can help:
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
      <div className="md:hover:scale-110 transition duration-150 ease-in-out cursor-pointer hover:border hover:border-red">
        <img className="w-[300px]" src={contact} alt="" />
      </div>
    </div>
  );
};
