import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

import '../02-useEffect/effect.css'

export const RealExampleRef = () => {

    // Estate para mostrar o no el componente
    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            {show && <MultipleCustomHooks />}

            <button
                className="btn btn-primary mt-5"
                onClick={()=>{
                    setShow(!show)
                }}
            >
                show | hide
            </button>
        </div>
    )
}
