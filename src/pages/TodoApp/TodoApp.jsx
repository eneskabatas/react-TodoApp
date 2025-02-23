import React, { useEffect, useState } from 'react'
import Forms from './components/Forms'
import "./todoapp.css"
import TodoList from './components/TodoList'

const TodoApp = () => {

    // useState : içeriği güncellenebilen değişkenler
    // props : parenttan childa doğru veri aktamı gerçekleştirdiğimiz işlemler
    // useEffect : değişkenlerimizde veya sayfamızda bir güncelleme meydana geldiğinde bir tetikleme işlemi gerçekleştirmek istediğimizde kullanıyoruz

    const [inputText,setInputText] = useState("")
    const [todos, setTodos] = useState([])
    const [durum,setDurum] = useState("All")
    const [todoFilter, setTodoFilter] = useState([])

    const filterTodos = () => {
        switch(durum){
            case "true" :
                setTodoFilter( todos.filter((todo)=> todo.complated == true ) )
                break;
            case "false":
                setTodoFilter( todos.filter( (todo) => todo.complated == false ) )
                break;
            default:
                setTodoFilter(todos)
                break;
        }
    }

    useEffect(()=>{
        getTodoLocal()
    },[])


    useEffect(()=>{
        filterTodos(todos)

        if(todos.length !== 0){
            saveTodoLocal()
        }
        if(todos.length == 0){
            localStorage.removeItem("todos")
        } 
    },[durum,todos])

    const saveTodoLocal = () => {
        localStorage.setItem("todos",JSON.stringify(todos))
    }

    const getTodoLocal = () => {
        if( localStorage.getItem("todos") === null ){
            localStorage.setItem("todos",JSON.stringify([]))
        }else{
            setTodos(JSON.parse(localStorage.getItem("todos")))
        }
    }

  

    return (
        <>
            <div className='container'>
                
                <Forms inputText={inputText} setInputText={setInputText} 
                todos={todos} setTodos={setTodos} setDurum={setDurum}
                />
               
                <TodoList todos={todos} setTodos={setTodos} todoFilter={todoFilter} />

            </div>
        </>
    )
}

export default TodoApp