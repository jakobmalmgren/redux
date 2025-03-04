import { useDispatch, useSelector } from "react-redux";
import {
  double,
  reset,
  decrement,
  increment,
  incrementByNumber,
} from "../redux/counterSlice";
import { changeName } from "../redux/typeNameSlice";
import { RootState } from "../redux/store";
import { useState } from "react";
const Counter = () => {
  const [amount, setAmount] = useState("");
  const counterValue = useSelector((state: RootState) => {
    return state.counter.value;
    // måste va samma som store counter..hur hänger de ihop??
  });
  const [name, setName] = useState("");
  const handleName = (e) => {
    dispatch(changeName(e.target.value));
    setName(e.target.value);
  };
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment +1
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement -1
      </button>
      <button
        onClick={() => {
          dispatch(incrementByNumber(amount));
        }}
      >
        value : {amount}
      </button>
      <input
        type="number"
        value={amount}
        onChange={(e) => {
          setAmount(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset 0
      </button>
      <button
        onClick={() => {
          dispatch(double());
        }}
      >
        double me
      </button>
      <h1>value :{counterValue} </h1>
      <h1>write your name:</h1>
      <input type="text" value={name} onChange={handleName} />
    </div>
  );
};

export default Counter;
