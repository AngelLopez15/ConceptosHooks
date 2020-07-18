import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import {useCounterSimple} from '../../hooks/useCounterSimple'

import './layout.css'

export const Layout = () => {

    const {counter, incremento} = useCounterSimple(1)
    
    const {data}= useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const {quote} = !!data && data[0]  
    
    // Para ver la memedia de la caja de inputs
    const pTag = useRef()

    // useState para renderizar las medidas a la pantalla
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
        // ára obtener la medida de la caja de texto p
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [])

    
    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className="blockquote text-right"> 
                <p 
                    className="mb-0"
                    ref={pTag}
                >
                    {quote}
                </p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize)}
            </pre>

            <button className="btn btn-primary"
                onClick={incremento}
            >
                Siguiente frase
            </button>
        </div>
    )
}

