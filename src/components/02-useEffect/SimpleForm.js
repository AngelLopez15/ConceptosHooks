import React, {useEffect, useState} from 'react'
import { Message } from './Message'
import './effect.css'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        nombre:'',
        correo:''
    })
    // desestructurando el useState para no tener que usar el operador punto al llamar
    // las propiedades
    const {nombre, correo} = formState

    // Si no ponemos el "[ ]"  en el useEffect entonces estamos diciendo que el evento se
    // dispare cuadno ocurra cualquier cambio sin emportar el cambio que sea
    // al poner "[ ]" lo estamos limitando a uno solo
    useEffect(()=>{
        console.log('hey soy un cambio en cualquier lugar')
    },[])

    // Los useEffect podemos configurarlos que estes escuchando los cambios en algun
    // elemento en especifico y asi poder disporar algo que queramos

    // este useEffect se va a disparar cuando cambie cuanquier parte del formulario
    // en los  "[ ]" debemos poner el elemento que queremos estar escuchando sus cambios
    useEffect(()=>{
        console.log('el formState cambio')
    },[formState])

    // Una recomendacion de los desarrolladores de React y que trabajemos los efecto de manera
    // individual
    // Este use Effect solo se va a disparar cuando el input del correo cambie
    useEffect(()=>{
        console.log('campo correo cambio')
    },[correo])

    // del evento "e" estamos desestructurando el target
    const handleInputChange = ({target}) => {
        setFormState({
            // hacerdo un copia del state actual con el spred
            ...formState,
            [target.name] : target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className="form-group">
                <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete = "off"
                    value={nombre}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="correo"
                    className="form-control"
                    placeholder="correo@correo.com"
                    autoComplete = "off"
                    value={correo}
                    onChange={handleInputChange}
                />
            </div>

            {nombre==='123' && <Message />}
        </>
    )
}
