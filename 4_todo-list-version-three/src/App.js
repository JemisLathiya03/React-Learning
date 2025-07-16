import TodoHeader from './components/TodoHeader'
import AddTodo from './components/AddTodo'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoItems from './components/TodoItems'
import { useState } from 'react'
import EmptyHeader from './components/EmptyHeader'

function App() {

  // let todoItems = [
  //   {
  //     todoDesc : "Go To school",
  //     todoDate : "04/02/2024"
  //   },
  //   {
  //     todoDesc : "Go To hospital",
  //     todoDate : "04/02/2024"
  //   }
  // ]

  let todoItems = [];

  const [todoData,setTodoData] = useState(todoItems)

  // {console.log(todoData)}

  const addTodoData = (todaName, todoDate) => {
    let newTodoData = {
      todoDesc : todaName,
      todoDate : todoDate
    }
    // console.log(newTodoData)
    // let newTodoDatas = [...todoData, newTodoData]
    // console.log(newTodoDatas)
    setTodoData([...todoData, newTodoData])
    
  }

  const deleteTodoData = (deleteIdx) => {
    // console.log(`delete ${deleteIdx} button is clicked`);
    // console.log(deleteIdx)
    todoData.splice(deleteIdx,1)
    // let newTodoDatas = todoData;
    // console.log(newTodoDatas)
    setTodoData([...todoData])
  }

  return (
    <>
      <div className='todoContainer container text-center'>
        <TodoHeader></TodoHeader>
        <AddTodo addTodoData={addTodoData}></AddTodo>
        {todoData.length > 0 ? <TodoItems todoItems={todoData} deleteTodoData={deleteTodoData}></TodoItems> : <EmptyHeader></EmptyHeader>}

        {/* {todoData.length > 0 ? <TodoItems todoItems={todoData} deleteTodoData={deleteTodoData}></TodoItems> : <EmptyHeader></EmptyHeader>} */}
      </div>
    </>
  )
}

export default App
