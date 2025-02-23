import React from 'react'
import Todos from './Todos'

const TodoList = ({todos, setTodos, todoFilter}) => {
  return (
    <>
    <div className='todoListContainer'>
        <ul className='todoList'>
            {
                todoFilter.map((todo)=>{
                    return <Todos key={todo.id} text={todo.text} todos={todos} setTodos={setTodos} todo={todo} />
                })
            }
            
        </ul>
    </div>
    </>
  )
}

export default TodoList