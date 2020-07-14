import React, {useEffect, useState} from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0})

    // desestructurando
    const {x,y} = coords

    useEffect(() => {
        
        const mouseMove = (e) => {
            console.log('Evento montado')
            const coords = {x:e.x, y:e.y}
            setCoords(coords)
        }

        // escuchando el evento del movimiento del mouse
        window.addEventListener('mousemove',mouseMove)

        // La importancia de esta funcion es la de permitir limpiar (eliminar) 
        // cualquiera que sea el efecto que nosotros estamos haciando
        // ya que de no hacer cada vez que se ejecute el evento se va a estar
        // acumulando lo que provocara que se consuma la memoria
        return () => {
            // Aqui dentro de esta funcion estamos removiendo el evento
            // o cualquier otro efecto que hayamos puesto y de esta manera
            // eliminamos (limpiamos) el efecto.
            console.log('Evento desmontado')
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div>
            <h1>Eres Geneal!</h1>
            <p>x: {x} y: {y}</p>
        </div>
    )
}
