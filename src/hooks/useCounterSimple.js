import {useState} from 'react'

// el inicial esta le ponemos que por default sea cero en caso de que no manden nada
export const useCounterSimple = (initialState=1) => {
    const [counter, setCounter] = useState(initialState)

    // factor es el parametro que vamos a recibir para ver de cuanto en cuanto va a ser
    // el incremento
    const incremento = () => {
        setCounter(counter+1)
    }

    const decremento = () =>{
        setCounter(counter-1)
    }

    // funcion para volver al valor por default
    const reset= () =>{
        setCounter(initialState)
    }
    
    // retornamos un objeto con las funciones y el estado
    return{
        counter,
        incremento,
        decremento,
        reset
    }

}
