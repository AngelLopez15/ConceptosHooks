import React from 'react'

import '../02-useEffect/effect.css'
import { useFetch } from '../../hooks/useFetch'
import {useCounterSimple} from '../../hooks/useCounterSimple'

export const MultipleCustomHooks = () => {

    // importando los unicos propiedades que me interesan
    const {counter, incremento} = useCounterSimple(1)
    
    const {loading, data}= useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    // extrayendo el autor y la cita de la data que manda la API
    // Una forma rapida de validar que venga la data es con 
    // una expresion logica. !!null <- estamos conviertiendo un null en un valor
    // booleano !null = true !!null = false
    // entonces estamos diciendo Si existe la data entonces que extraiga 
    // la posicion cero de la data. Si no trae nada la data es null por lo tanto
    // da false y ya no se ejecuta nada. PEro si la data trae algo va a ser true
    // y extraera la data
    const {author, quote} = !!data && data[0]  

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {/* como tenemos dos componenetes uno se debe mostar cuando esta cargando
            y el otro cuando la API responde entonces usaremos un ternario */}
            {
                // si loadingexiste cargar el componente
                loading
                ?
                (
                <div className="alert alert-info text-center">
                    loading...
                </div>
                )
                // si no existe loading cargar el otro componente
                :
                (
                <blockquote className="blockquote text-right"> 
                    <p className="mb-0">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
                </blockquote>
                )
            }
            <button className="btn btn-primary"
                onClick={incremento}
            >
                Siguiente frase
            </button>
        </div>
    )
}
