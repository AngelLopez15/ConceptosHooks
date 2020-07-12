import {useState} from 'react'

// el inicial esta le ponemos que por default sea cero en caso de que no manden nada
export const useCounter = (initialState=0) => {
    const [state, setState] = useState(initialState)

    // factor es el parametro que vamos a recibir para ver de cuanto en cuanto va a ser
    // el incremento
    const incremento = (factor) => {
        setState(state+factor)
    }

    const decremento = (factor) =>{
        setState(state-factor)
    }

    // funcion para volver al valor por default
    const reset= () =>{
        setState(initialState)
    }
    
    // retornamos un objeto con las funciones y el estado
    return{
        state,
        incremento,
        decremento,
        reset
    }

}
