const TodoItem = ({todoDesc,todoDate}) => {
  return<>
    <div className="row todo-row">
      <div className="col-6">{todoDesc}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  </>;
};

export default TodoItem;
