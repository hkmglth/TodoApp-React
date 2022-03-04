import React,{useState} from 'react'
import {FaTrashAlt,FaEdit} from "react-icons/fa"
import {useToDoLayerValue} from "../context/toDoContext"

const listTodos = ({allTodos}) => {
    const [{},dispatch] = useToDoLayerValue()

    const DeleteTodo = todoId => {
        dispatch({
            type:'DELETE_TODO',
            payload:todoId
        })
    }     

    return(
        <> 
            {allTodos && allTodos.map(todo => (
                <div className=" mt-5 rounded-lg px-20 py-8 flex justify-between w-1/2 bg-gray-300">
                    <p className="mr-7" >{todo.todo}</p>
                    <p className="flex items-center text-xl">
                        <FaTrashAlt onClick={ ()=> DeleteTodo(todo.id) } className="text-orange-500 hover:text-gray-500 transition"/>
                    </p>
                </div>
            ))}
        </>
    )
}
export default listTodos