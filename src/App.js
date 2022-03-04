import "./tailwind.css"
import ListTodos from "./components/listTodos"
import React,{useState} from 'react'
import { useToDoLayerValue } from "./context/toDoContext"

const App = () =>{

  const [{todos},dispatch] = useToDoLayerValue()
  const [todo,setTodo] = useState("")

  const handlesubmit = (e)=>{
    e.preventDefault()
    
    if(!todo && todo.length < 1) return;

    const newTodo = {
      id: Math.floor(Math.random()*43796872),
      todo,
    };

    dispatch({
      type:'ADD_TODO',
      payload: newTodo
    })
  }
  return(
    <div className=" bg-gray-500 min-h-screen max-h-full flex items-center flex-col " >
        <div className=" mt-10 mb-5 text-2xl font-bold bg-gray-600 px-20 py-8 rounded-lg flex">
          <p className="text-orange-500">Thando's</p><p className="pl-2 text-white" >To Do List</p>
        </div>
        <div className="">
          <form onSubmit={handlesubmit}>
            <input onChange={(e) => {setTodo(e.target.value)}} value={todo} type="text" className="px-5 py-2 rounded-lg placeholder-black" placeholder="Write something..."/>
            <button type="submit" className="bg-gray-300 mx-5 px-5 py-2 rounded-lg text-orange-500 hover:text-gray-500 font-bold">Add</button>
          </form>
          
        </div>
        <ListTodos allTodos = {todos} />
    </div>
  )
}
export default App;