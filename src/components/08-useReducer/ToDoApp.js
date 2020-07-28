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
        <div className="container mt-4">
            <h1>ToDoList App</h1>
            <hr />
            <p className="h1">Agregar tarea</p>
            <hr />
            <div className="row mb-4">
                <div className="col-12 col-sm-6">
                    <form>
                        <input 
                            type="text"
                            name="description"
                            placeholder="comprar ..."
                            autoComplete="off"
                            className="form-control"
                        />
                    </form>
                </div>
                <div className="col-12 col-sm-6">
                    <button
                        className="btn btn-success btn-block"
                    >Agregar</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <ul className="list-group list-group-flush">
                        {
                            toDos.map((toDo, i) => (
                                <li
                                    key={toDo.id}
                                    className="list-group-item"
                                ><p className="mb-0">{i+1}. {toDo.desc}</p></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-12 col-sm-6">
                    <button
                        className="btn btn-danger btn-block"
                    >Borrar</button>
                </div>
            </div>
        </div>
    )
}
