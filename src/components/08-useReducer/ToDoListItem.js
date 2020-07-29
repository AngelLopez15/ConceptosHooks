import React from 'react'

export const ToDoListItem = ({toDo,index,handleDelete,handleToggle}) => {
    return (
        <li
            key={toDo.id}
            className="list-group-item"
        >
        <p className={`mb-0 ${toDo.done && 'complete'}`}
        onClick={()=>handleToggle(toDo.id)}
        >{index+1}. {toDo.desc}</p>
        <button
            className="btn btn-danger btn-block delate"
            onClick={()=>handleDelete(toDo.id)}
        >Borrar</button>
        </li>
    )
}
