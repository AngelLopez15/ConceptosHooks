import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'

export const CounterCustomHook = () => {

    // desestructurando lo que nos retorna la funcion de custom hook 
    // Si queremos un valor de inicio especifico aqui es donde se pone 
    // dentro de los parentesis del useCounter
    const {state, incremento, decremento,reset} = useCounter()


    return (
        <>
            {/* le pasamos el state por que es donde esta el valor actual del estado */}
            <h1>Counter Con Hook: {state} </h1>
            <hr />
            {/* ahora el incremente es de 2 en 2 por que la funcion recibe un parametro */}
            <button onClick={()=>incremento(2)} className="btn">+1</button>
            <button onClick={reset} className="btn">Reset</button>
            <button onClick={()=>decremento(2)} className="btn">-1</button>
        </>
    )
}
