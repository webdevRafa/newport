import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Tech } from "./components/Tech";
import resolve from "./assets/resolve.png";
function App() {
  return (
    <>
      <About />
      <Tech />
      {/* background image fixed */}
      <div className="relative z-0">
        <div className="fixed top-0 left-0 w-full h-[100vh] z-0 opacity-10 img-bg"></div>
      </div>
      <div className="gap-2 mx-auto w-full max-w-[1200px] items-center flex flex-col md:flex-row text-white relative z-40">
        <div>
          <img src={resolve} alt="" />
        </div>
        <div className="p-3">
          <h1 className="text-center font-orbitron font-bold text-4xl mb-2">
            UNYIELDING RESOLVE
          </h1>
          <p className="mb-2">
            My journey as a developer is filled with challenges and errors, but
            it’s through these trials that my resolve is forged. Just as a
            sculptor shapes a masterpiece from raw stone, I craft elegant
            solutions from lines of code.
          </p>

          <p className="mb-2">
            Each keystroke is a step forward in a labyrinth of possibilities.
            When I encounter obstacles, I don't see dead ends; I see
            opportunities to innovate and grow. My passion for technology drives
            me to push boundaries and redefine what’s possible.
          </p>

          <p className="mb-2">
            Whether it’s debugging a stubborn error or navigating the
            complexities of a new framework, I embrace every challenge with
            determination and a commitment to excellence. My resolve is
            unyielding, and my dedication to crafting extraordinary digital
            experiences is unwavering.
          </p>
        </div>
      </div>
      <Contact />
      <div className="h-[600px]"></div>
      <div className="w-full h-[400px] underrated"></div>
      <div className="h-[1000px]"></div>
    </>
  );
}

export default App;
