import React, { useState } from 'react'
import '../02-useEffect/effect.css'
import { useCounterSimple } from '../../hooks/useCounterSimple'
import { Small } from './Small'

export const Memorize = () => {
    // PAra entender el concepto de Memo debemos traer algo que dispare su comportamiento
    // En este caso se usara el counter
    
    const {counter, incremento} = useCounterSimple(0)
    
    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Memorize</h1>
            <hr />

            <h2>Counter: <Small  value={counter}/> </h2>

            <button
                className="btn btn-primary"
                onClick={incremento}
            >
                +1
            </button>

            <button 
                className="btn btn-outline-primary ml-3"
                onClick={()=>{
                    setShow(!show)
                }}
            >
                {/* Para poder mostar los valores booleanos usamos el metodo JSON */}
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>
    )
}
