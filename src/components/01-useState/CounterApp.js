import React, {useState} from 'react'
import './counter.css'

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1:10,
        counter2:20
    })

    // desestructurando el objeto para ocupar los counter
    const {counter1,counter2} =state

    return (
        <>
            <h1>Counter {counter1}</h1>
            <h1>Counter {counter2}</h1>
            <hr/>

            <button 
                className="btn btn-primary"
                onClick={()=>{
                    setState({
                        // ocupando el operador spred para extraer las propiedades
                        // y no modigficar el state. Aunque tambien estamos extrallendo    
                        // el counter1 como despues lo volvemos a definir se sobreescribe
                        // y por eso solo el counter uno cambia su valor
                        ...state,
                        counter1:counter1+1
                    })
                }}
            >
                +1
            </button>
        </>
    )
}
