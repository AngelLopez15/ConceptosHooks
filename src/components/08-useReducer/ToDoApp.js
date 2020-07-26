import React, { useReducer } from 'react'
import { todoReducer } from './toDoReducer'

import './styles.css'

// creando el estado inicial
const initialState = [{
    id:new Date().getTime(),
    desc:'Aprender React',
    done:false
}]


export const ToDoApp = () => {

    // declarando el reducer
    // reducer es la funcion reducer
    // initialstate es el estado inicial
    // init es una funcion para inicializar el state en caso de que el state
    // en caso de que el state sea procesado o haga varias acciones. Ya que 
    // cada vez que el componenete se vuelva a ejecutar al ser una funcion externa
    // lo hace mas ligero y rapido. Incluso puede memorizar el resultado para no
    // volverlo a ejecutar en caso de ser necesario.

    // dispatch sirve para disparar las acciones para el reducer.

    // const [state, dispatch] = useReducer(reducer, initialState, init)

    const [toDos] = useReducer(todoReducer, initialState)
    
    console.log(toDos)

    return (
        <div>
            <h1>TodoApp</h1>
            <h1 />
        </div>
    )
}
