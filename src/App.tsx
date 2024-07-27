import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Tech } from "./components/Tech";

function App() {
  return (
    <>
      <About />
      <Tech />
      <Contact />
      <div className="h-[300px]"></div>
    </>
  );
}

export default App;
