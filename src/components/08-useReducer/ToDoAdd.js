import React from 'react'

import { useForm } from '../../hooks/useForm'

export const ToDoAdd = ({handleAddToDo}) => {
    
    const [{description}, handleInputChange, reset] = useForm({
        description:''
    })
    
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

        handleAddToDo(newToDo)
        reset()
    }

    return (
        <>
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
        </>
    )
}
