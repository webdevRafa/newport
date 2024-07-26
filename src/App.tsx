import { Tech } from "./components/Tech";

function App() {
  return (
    <>
      <div className="bg-black-600 p-2 sticky top-0">
        <h1 className="text-red">
          developr<span className="text-white">4</span>
        </h1>
      </div>
      <Tech />
    </>
  );
}

export default App;
