import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import TodoItem from "./components/todoitem"
import AddTodoForm from "./components/AddTodoForm"
import { dummyData } from "./data/todos"


function App() {
  const [todos, setTodos] = useState(dummyData);
  function setTodoCompleted(id:number, completed:boolean){
    setTodos((prevTodos) => 
      prevTodos.map(todo => (
        todo.id === id ? {...todo, completed} : todo
      ))
  );
  }

  function AddTodo(title:string){
    setTodos((prevTodos) => [
      {
        id:prevTodos.length + 1,
        title,
        completed:false
      },
      ...prevTodos,
    ]);
  }
  return (
    <main className='h-screen px-2 py-10 bg-blue-200 space-y-5'>
      <h1 className="text-3xl font-mono text-center bg-slate-100">
        Your todos
      </h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm
        onSubmit={AddTodo}
        />
        <div className="space-y-2">
          {todos.map(todo => (
            <TodoItem 
            key={todo.id}
            todo={todo}
            onCompletedChange={setTodoCompleted}
            />
          ))}
        </div>
      </div>
    </main>
  )
}


export default App
