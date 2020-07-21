import React, { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement'

import '../02-useEffect/effect.css'

export const CallbacksHooks = () => {

    const [counter, setCounter] = useState(1)

    // Como las funciones estan dentro del componenete cada vez que vuelve a renderizar 
    // por consecuencia vuelve a generar la funcion y esta funcion como es una constante 
    // que esta almacenada en memoria y como es una funcion que en realidad es un objeto
    // cada vez que se genera se vuelve uno diferente por que apunta a lugares diferentes
    // en la memoria entonces no podemos ocupar el memo. Y por eso tambien que siempre se
    // vuelve a disparar. Aqui es donde necesitamos ocupar el useCallback
    // const increment = () =>{
    //     setCounter(counter + 1)
    // }
    
    // useCallback recibe como argumentos una funcion (que es lo que queremos hacer) y
    // las dependecias. useCallback regresa una version memorizada de la funcion que
    // le pasemos y que servira para mandarla como argumento a otros lugares y react sabra
    // que la funcion no ha cambiado si la dependencia no ha cambiado
    const increment = useCallback((num) => {
            // recibiendo el argumento para saber de cuanto en cuanto incrementar
            // desde el componente de ShowIncrement
            setCounter(c => c + num)
        },
        // las dependencias son los del useState pero no podemos usar counter por que
        // si la ponemos regresamos al mismo problema que queremos resolver- Esto lo
        // podemos arreglar con solo cambiar las dependencias. 
        [setCounter]
    )
    // Esta version memorizada de increment ya es la que se esta mandando como argumento
    // en el componente

    // Otra forma muy comun de usar el useCallback es cuadno usamos el useEffect y esto es
    // por que cunado usamos el useEffect y este tiene dependencia a una funcion entonces
    // tambien hay que usar el useCallback para evitar que el efecto se dispare cada vez que 
    // se renderice o se vuelva a controir una funcion 
    // useEffect(() => {
    // //    codigo
    // }, [increment])


    return (
        <div>
            <h1>useCallBackHook</h1>
            <hr />

            <h2>Counter: {counter}</h2>

            <ShowIncrement increment={increment}/>
        </div>
    )
}
