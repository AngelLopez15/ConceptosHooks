import {useState} from 'react'

export const useForm = (initialState={}) => {
    const [values, setValues] = useState(initialState)

    // Para resetear los campos del formulario
    const reset= () =>{
        setValues(initialState)
    }

    // NOTA DE INGLES: handle significa encargarse de
    
    // del evento "e" estamos desestructurando el target
    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]:target.value
        })
    }

    // podemos retornarlo como queramos en arreglo o en objeto
    return [values, handleInputChange, reset]
}
