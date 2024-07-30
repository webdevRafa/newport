import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Tech } from "./components/Tech";
function App() {
  return (
    <>
      <About />
      <Tech />
      {/* background image fixed */}
      <div className="relative z-0">
        <div className="fixed top-0 left-0 w-full h-[100vh] z-0 opacity-10 img-bg"></div>
      </div>
      <div className="max-w-[1600px] w-[90%] shadow-md h-[400px] mx-auto coffee z-40 relative"></div>
      <Contact />
      <div className="h-[600px]"></div>
      <div className="h-[1000px]"></div>
    </>
  );
}

export default App;
