import React, { useState, useMemo } from 'react'
import { useCounterSimple } from '../../hooks/useCounterSimple'
import { procesoPesado } from '../../helpers/procesoPesado'
import '../02-useEffect/effect.css'


export const MemoHook = () => {
    // PAra entender el concepto de Memo debemos traer algo que dispare su comportamiento
    // En este caso se usara el counter
    
    const {counter, incremento} = useCounterSimple(100)
    
    const [show, setShow] = useState(true)

    // Como tenemos el problema que al aprimir el boton de "show" dispara el proceso pesado
    // aunque no deberia por que este proceso solo se dispara con el boton de counter
    // debemos usar el Hook de useMemo para arreglar este problema

    // recibe un callback y una dependencia. Que es el elemento que queremos que este 
    // vifilando para que solo se dispare cuando este cambie,
    const memoProcesoPesado=useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>Memorize</h1>
            <hr />

            <p>{memoProcesoPesado}</p>

            <h2>Counter: <small>{counter}</small> </h2>

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
