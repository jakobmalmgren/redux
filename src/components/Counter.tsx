import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByNumber } from "../redux/counterSlice";
import { RootState } from "../redux/store";
import { useState } from "react";
const Counter = () => {
  const [amount, setAmount] = useState("");
  const counterValue = useSelector((state: RootState) => {
    return state.counter.value;
  });

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
      <h1>value :{counterValue} </h1>
    </div>
  );
};

export default Counter;
