import React, { useEffect } from 'react'
import './effect.css'
import { useForm } from '../../hooks/useForm'

export const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        nombre:'',
        correo:'',
        password:''
    })

    // desestructurando el useForm para no tener que usar el operador punto al llamar
    // las propiedades
    const {nombre, correo, password} = formValues  

    // escuchando cambios en el campo email para aplicar un efecto
    // en este caso solo imprimir en cosola
    useEffect(()=>{
        console.log('email cambio')
    },[correo])

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formValues)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
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
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="**********"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Guardar
            </button>

        </form>
    )
}
