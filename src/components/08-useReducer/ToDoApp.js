import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './toDoReducer'
import { useForm } from '../../hooks/useForm'

import './styles.css'

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
    // init es una funcion para inicializar el state en caso de que el state
    // en caso de que el state sea procesado o haga varias acciones. Ya que 
    // cada vez que el componenete se vuelva a ejecutar al ser una funcion externa
    // lo hace mas ligero y rapido. Incluso puede memorizar el resultado para no
    // volverlo a ejecutar en caso de ser necesario.

    // dispatch sirve para disparar las acciones para el reducer.

    // const [state, dispatch] = useReducer(reducer, initialState, init)

    const [toDos, dispatch] = useReducer(todoReducer, [], init)
    
    const [{description}, handleInputChange, reset] = useForm({
        description:''
    })

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

    const handleToogle=(toDoId)=>{
        dispatch({
            type:'toggle',
            payload:toDoId
        })
    }

    // añade una nueva tarea
    const handleSubmit = (e) =>{
        e.preventDefault()
        if (description.trim().length <= 1) {
            return
        }

        const newToDo = {
            id:new Date().getTime(),
            desc:description,
            done:false
        }

        const action = {
            type:'add',
            payload:newToDo
        }

        dispatch(action)
        reset()
    }
    

    return (
        <div className="container mt-4">
            <h1>ToDoList App</h1>
            <hr />
            <p className="h1">Agregar tarea</p>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="row mb-4">  
                    <div className="col-12 col-sm-6 mb-2">
                        <input 
                            type="text"
                            name="description"
                            placeholder="comprar ..."
                            autoComplete="off"
                            className="form-control"
                            value={description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-12 col-sm-6">
                    <button
                        type="submit"
                        className="btn btn-success btn-block"
                    >Agregar</button>
                    </div>
                </div>
            </form>
            <div className="row mb-2 justify-content-center">
                <div className="col-12">
                    <ul className="list-group list-group-flush">
                        {
                            toDos.map((toDo, i) => (
                                <li
                                    key={toDo.id}
                                    className="list-group-item"
                                >
                                <p className={`mb-0 ${toDo.done && 'complete'}`}
                                onClick={()=>handleToogle(toDo.id)}
                                >{i+1}. {toDo.desc}</p>
                                <button
                                    className="btn btn-danger btn-block delate"
                                    onClick={()=>handleDelete(toDo.id)}
                                >Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
