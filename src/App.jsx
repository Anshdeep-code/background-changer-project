import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState();

  return (
    <>
      <div
        className="flex w-full h-screen duration-200 bg-gray-500"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-1">
          <div className="flex gap-4 bg-white rounded-full text-xl font-semibold p-2 shdaow-lg shadow-black">
            <button
              onClick={() => setColor("red")}
              className="rounded-full px-2 py-1 shadow-black bg-amber-700 outline-none cursor-pointer shadow-lg"
              style={{ backgroundColor: "red", color: "white" }}
            >
              red
            </button>
            <button
              onClick={() => setColor("green")}
              className="rounded-full px-2 py-1 bg-amber-700 outline-none cursor-pointer shadow-lg shadow-black"
              style={{ backgroundColor: "green", color: "white" }}
            >
              green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="rounded-full px-2 py-1 bg-amber-700 outline-none cursor-pointer shadow-lg shadow-black"
              style={{ backgroundColor: "blue", color: "white" }}
            >
              blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
