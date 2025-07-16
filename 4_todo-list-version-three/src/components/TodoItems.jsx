import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, deleteTodoData }) => {
  console.log(todoItems);
  let i = 0;
  return (
    <div className="text-center">
      {todoItems.map((item) => (
        <TodoItem
          key={i}
          todoDesc={item.todoDesc}
          todoDate={item.todoDate}
          deleteIdx={i++}
          deleteTodoData={deleteTodoData}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
