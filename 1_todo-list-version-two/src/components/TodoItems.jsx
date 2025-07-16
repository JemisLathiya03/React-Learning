import TodoItem from "./TodoItem";

const TodoItems = ({todoItems}) => {
  console.log(todoItems)
  return (
    <div className="text-center">
      {todoItems.map(item => <TodoItem todoDesc={item.todoDesc} todoDate={item.todoDate}></TodoItem>)}
    </div>
  );
};

export default TodoItems;
