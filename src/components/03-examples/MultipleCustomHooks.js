import React from 'react'

import '../02-useEffect/effect.css'
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {
    
    const state= useFetch(`https://www.breakingbadapi.com/api/quotes/1`)

    return (
        <div>
            <h1>Custom Hook</h1>
        </div>
    )
}
