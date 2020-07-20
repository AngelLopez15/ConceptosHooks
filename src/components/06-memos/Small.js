import React from 'react'

// Para que este componenete no se dispare cuando el ususario
// interactue con algun otro elemento que sea este lo envolvemos dentro del
// metodo memo (memorizar) y asi evitamos que la app no funcione de formas que no queremos
// Solo se ejecutara cuando las properties cambien 
export const Small = React.memo(({value}) => {
    
    console.log('Me volvi a llamar')
    
    return (
        <small>
            {value}
        </small>
    )
}
)