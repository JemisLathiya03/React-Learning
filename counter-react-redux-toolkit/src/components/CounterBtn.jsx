import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/counterSlice";
import { privacyAction } from "../store/privacySlice";

const CounterBtn = () => {
  const dispatcher = useDispatch();

  const numVal = useRef();

  const handleIncrement = () => {
    // console.log(counterAction.increment());
    dispatcher(counterAction.increment());
  };

  const handleDecrement = () => {
    dispatcher(counterAction.decrement());
  };

  const handleIAdd = () => {
    dispatcher(
      counterAction.add({
        num: numVal.current.value,
      })
    );
  };

  const handleSubstrate = () => {
    dispatcher(
      counterAction.subtract({
        num: numVal.current.value,
      })
    );
  };

  const handlePrivacy = () => {
    dispatcher(privacyAction.privacyToggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>

        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handlePrivacy}
        >
          Privacy
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center conter-row">
        <input type="text" ref={numVal} placeholder="Enter Number" />
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIAdd}
        >
          ADD
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleSubstrate}
        >
          SUBSTRATE
        </button>
      </div>
    </>
  );
};

export default CounterBtn;
