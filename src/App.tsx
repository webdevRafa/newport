import { Welcome } from "./components/Welcome";
import { Contact } from "./components/Contact";
import { Tech } from "./components/Tech";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Background } from "./components/Background";
function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Tech />
      <About />
      <Contact />
      <Background />

      <div className="h-[2000px]"></div>
    </>
  );
}

export default App;
