import TodoHeader from './components/TodoHeader'
import AddTodo from './components/AddTodo'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoItems from './components/TodoItems'

function App() {

  let todoItems = [
    {
      todoDesc : "Go To school",
      todoDate : "04/02/2024"
    },
    {
      todoDesc : "Go To school",
      todoDate : "04/02/2024"
    }
  ]

  return (
    <>
      <div className='todoContainer container text-center'>
        <TodoHeader></TodoHeader>
        <AddTodo></AddTodo>
        <TodoItems todoItems={todoItems}></TodoItems>
      </div>
    </>
  )
}

export default App
