import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Tech } from "./components/Tech";
import sunset from "./assets/sunset.jpg";
function App() {
  return (
    <>
      <About />
      <Tech />
      <div className="relative z-0">
        <div className="fixed top-0 left-0 w-full h-[100vh] z-0 opacity-10">
          <img className="object-cover" src={sunset} alt="" />
        </div>
      </div>
      <Contact />
      <div className="h-[800px]"></div>
      <div className="bg-black-800 h-[800px] w-full relative z-40">
        <h1>testing</h1>
      </div>
    </>
  );
}

export default App;
