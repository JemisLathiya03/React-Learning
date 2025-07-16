import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const CounterBtn = () => {
  const dispatcher = useDispatch();

  const numVal = useRef();

  const handleIncrement = () => {
    dispatcher({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatcher({ type: "DECREMENT" });
  };

  const handleIAdd = () => {
    dispatcher({ type: "ADD", payload: { num: numVal.current.value } });
  };

  const handleSubstrate = () => {
    dispatcher({ type: "SUBSTRATE", payload: { num: numVal.current.value } });
  };

  const handlePrivacy = () => {
    dispatcher({ type: "PRIVACY" });
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
