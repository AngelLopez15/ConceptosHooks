import React, { useRef } from 'react'
import '../02-useEffect/effect.css'

export const FocusScreen = () => {
    
    const inputRef = useRef()

    const handleClick =()=>{
        // Esta seria la forma tradicional de obtener un elemento
        // o poniendole un id
        // document.querySelector('input').select()

        // esta es la forma usando el useRef
        inputRef.current.select()
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input
                // debemos pasar la referencia en el elemento que queremos 
                // que busca el useRef
                ref={inputRef}
                className="form-control"
                placeholder="Nombre"
            />

            <button
                className="btn btn-outline-primary mt-5"
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    )
}
