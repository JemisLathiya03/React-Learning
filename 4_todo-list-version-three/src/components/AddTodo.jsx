import { useState } from "react";
import css from "./AddTodo.module.css";

const AddTodo = ({ addTodoData }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleTodoName = (event) => {
    // console.log(event.target.value);
    setTodoName(event.target.value);
  };

  const handleTodoDate = (event) => {
    setTodoDate(event.target.value);
  };

  const handleTodoAddBtn = () => {
    if (todoName !== "" && todoDate !== "") {
      addTodoData(todoName, todoDate);
    }
    setTodoName("");
    setTodoDate("");
  };

  return (
    <>
      <div className="text-center">
        <div className="row todo-row">
          <div className="col-6">
            <input
              className={css["todo-input"]}
              type="text"
              placeholder="Enter Todo Here"
              onChange={handleTodoName}
              // value={todoName}
            ></input>
          </div>
          <div className="col-4">
            <input
              className={css["todo-input"]}
              type="date"
              onChange={handleTodoDate}
              value={todoDate}
            ></input>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleTodoAddBtn}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
