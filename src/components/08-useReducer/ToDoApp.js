import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './toDoReducer'

import './styles.css'
import { ToDoList } from './ToDoList'
import { ToDoAdd } from './ToDoAdd'

// creando el estado inicial
// const initialState = [{
//     id:new Date().getTime(),
//     desc:'Aprender React',
//     done:false
// }]

const init = () =>{
    
    return JSON.parse(localStorage.getItem('toDos')) || []

    // return [{
    //     id:new Date().getTime(),
    //     desc:'Aprender React',
    //     done:false
    // }]
}

export const ToDoApp = () => {

    // declarando el reducer
    // reducer es la funcion reducer
    // initialstate es el estado inicial
    // init es una funcion para inicializar el state en caso de 
    // que el state sea procesado o haga varias acciones. Ya que 
    // cada vez que el componenete se vuelva a ejecutar al ser una funcion externa
    // lo hace mas ligero y rapido. Incluso puede memorizar el resultado para no
    // volverlo a ejecutar en caso de ser necesario.

    // dispatch sirve para disparar las acciones para el reducer.

    // const [state, dispatch] = useReducer(reducer, initialState, init)

    const [toDos, dispatch] = useReducer(todoReducer, [], init)
    

    // Para guardar los datos en localStorage
    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify(toDos))
    }, [toDos])

    // para borrar una tarea
    const handleDelete=(toDoId)=>{

        const action = {
            type:'delete',
            payload:toDoId
        }

        dispatch(action)
    }

    const handleToggle=(toDoId)=>{
        dispatch({
            type:'toggle',
            payload:toDoId
        })
    }

    const handleAddToDo = (newToDo) =>{

        dispatch({
            type:'add',
            payload:newToDo
        })
    }

    return (
        <div className="container mt-4">
            <h1>ToDoList App</h1>
            <hr />
            <ToDoAdd 
                handleAddToDo={handleAddToDo}
            /> 
            <div className="row mb-2 justify-content-center">
                <div className="col-12">
                    <ToDoList 
                        toDos={toDos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
            </div>
        </div>
    )
}
