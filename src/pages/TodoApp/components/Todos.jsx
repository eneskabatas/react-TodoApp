import React from 'react'
import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";

const Todos = ({text, todos, setTodos, todo}) => {

    const deleteTodos = () => {
        setTodos( todos.filter( (eL) => eL.id !== todo.id ) )

        // eLement
    }

    const complateTodos = () => {
      setTodos(
        todos.map((item)=>{
          if(item.id === todo.id){
            return {
              ...item, complated: !item.complated
            }
          }
          return item
        })
      )
    }

  return (
    <>
    <div className={`todoContainer ${todo.complated ? "complated" : "" }  `} >
        <button className='complateBtn' onClick={complateTodos} > {todo.complated ? <FaCheck /> : <MdOutlineRadioButtonUnchecked />} </button>
        <li className='todo'> {text} </li>
        <button className='trashBtn' onClick={deleteTodos}> <FaTrash /> </button>

    </div>
    </>
  )
}

export default Todos