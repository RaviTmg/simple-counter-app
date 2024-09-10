import Head from "next/head";
import { useState } from "react";
import MyButton from "./my-button";
import History from "./history";
import { TodoList } from "./todo-list";
import AlertShow from "./alert-show";
import Greeting from "./greeting";
import CountryList from "./country-list";
import Groceries from "./groceries";

const max_counter = 10;
const min_counter = -10;

export default function Home() {
  const [ count, setCount ] = useState(0);
  const [ tempCount, setTempCount ] = useState(null);
  const [history, setHistory] = useState([]);

  const increaseCounter = () => {
    if (count >= max_counter) {
      alert("max counter reached");
      return;
    }

    setHistory([...history, count]);
    setCount(count + 1);
    console.log(history);
  }

  const decreaseCounter = () => {
    if (count <= min_counter) {
      alert("min counter reached");
      return;
    }

    setHistory(count);
    setCount(count - 1);
    console.log(history);
  }

  const handleInput = (e) => {
    const value = e.target.value;
    setTempCount(Number(value));
  }

  const handleReset = () => {
    setHistory(count);
    setCount(tempCount);
    console.log(history);
  }

  const handleUndo = () => {
    if (history.length === 0) return;

    const lastElementIndex = history.length - 1;
    setCount(history[lastElementIndex]);

    const newHistory = history.slice(0, lastElementIndex);
    setHistory(newHistory);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="heading">Hello {count}</h1>
        <MyButton
          text="decrease counter"
          onClick={decreaseCounter}
        />
        <MyButton
          text="increase counter"
          onClick={increaseCounter}
        />
        <input
          onInput={handleInput}
        />
        <MyButton
          text="reset to custom value"
          onClick={handleReset}
        />
        <MyButton
          text="undo"
          onClick={handleUndo}
        />
        <History
          history={history}
        />
        <TodoList/>
        <AlertShow />
        <Greeting/>
        <CountryList/>
        <Groceries/>
      </main>
    </>
  );
}
