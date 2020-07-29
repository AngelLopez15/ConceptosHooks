import React from 'react'
import { ToDoListItem } from './ToDoListItem'

export const ToDoList = ({toDos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                toDos.map((toDo, i) => (
                    <ToDoListItem 
                        key={toDo.id}
                        toDo={toDo}
                        index={i}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                ))
            }
        </ul>
    )
}
