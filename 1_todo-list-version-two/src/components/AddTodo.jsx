import css from "./AddTodo.module.css"

const AddTodo = () => {
  console.log(css);
  return (
    <>
      <div className="text-center">
        <div className="row todo-row">
          <div className="col-6"><input className={css['todo-input']} type="text" placeholder="Enter Todo Here"></input></div>
          <div className="col-4"><input className={css['todo-input']} type="date"></input></div>
          <div className="col-2"><button type="button" className="btn btn-success">Success</button></div>
        </div>
      </div>
    </>
  );
};

export default AddTodo
