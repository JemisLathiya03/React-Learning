const TodoItem = ({ todoDesc, todoDate, deleteTodoData, deleteIdx }) => {
  return (
    <>
      <div className="row todo-row">
        <div className="col-6">{todoDesc}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteTodoData(deleteIdx)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
