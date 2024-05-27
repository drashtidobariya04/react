import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    // counter = counter + 1;
    // setCounter(counter + 1);
    if (counter === 0) {
      setCounter(0);
    } else {
      console.log("clicked ", counter);
    }
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>drashti dobariya</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>Add value:{counter}</button>
      <br />

      <button onClick={removeValue}>remove value:{counter}</button>
      <p>footer:{counter}</p>
    </>
  );
  // return (
  //   <>
  //     <h1 className="bg-green-400 text-black p-10 rounded-xl">talwind test</h1>
  //   </>
  // );
}

export default App;
