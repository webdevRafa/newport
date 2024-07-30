import logo from "../assets/devrafa-logo.svg";

export const Navbar: React.FC = () => {
  return (
    <div className="bg-black-600 p-2 sticky top-0 flex z-50">
      <img className="w-[100px]" src={logo} alt="" />
    </div>
  );
};
