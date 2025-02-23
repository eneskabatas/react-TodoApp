import React, { useState } from 'react'
import { FaFolderPlus } from "react-icons/fa";

const Forms = ({inputText, setInputText, todos, setTodos, setDurum}) => {


    const [warning,setWarning] = useState(false)
    const [success,setSuccess] = useState(false)

    const submitTodo = (e) => {
        e.preventDefault()

        const empty = str => !str.trim().length

        if(empty(inputText)){
            setWarning(true)
            setTimeout(()=>{
                setWarning(false)
            },2000)
        }else{
            setSuccess(true)
            setTimeout(()=>{
                setSuccess(false)
            },2000)

            setTodos([
                ...todos,
                { text:inputText, complated:false, id:Math.random() }
            ])
        }

        
        setInputText("")
    }

    const changeTodo = (e) => {
        setInputText(e.target.value)
    }

    const changeSelect = (e) => {
        setDurum(e.target.value)
        // console.log(e.target.value)
    }

    return (
        <>
            <form className='formContainer'>
                <header>
                    <h1>Todo Uygulaması</h1>
                </header>

                <div className='alertContainer'>
                    
                    {
                        warning ? 
                        <div className='alertWarning'>
                            <h3>Boş Ekleme Yapamazsınız</h3>
                        </div>
                        :
                        ""
                    }

                    {
                        success && 
                        <div className='alertSuccess'>
                            <h3> Görev Başarıyla Eklendi </h3>
                        </div>
                    }


                </div>

                <div className='addTodoContainer'>
                    <input type="text" placeholder='Görev Ekle.. 007' className='inputTodo' value={inputText} onChange={changeTodo} />
                    <button onClick={submitTodo} className='todoAddBtn'>Görevi Kabul Et <FaFolderPlus className='iconAdd' /> </button>
                </div>
                <div className='selectContainer'>
                    <select name="" className='filter' onChange={changeSelect}>
                        <option value="All">Tümü</option>
                        <option value="true">Tamamlananlar</option>
                        <option value="false">Tamamlanmayanlar</option>
                    </select>
                </div>
            </form>
        </>
    )
}

export default Forms