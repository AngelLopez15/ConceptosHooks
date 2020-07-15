import { useState,useEffect } from "react"


export const useFetch = (url) => {
    const [state, setState] = useState({data:null, loading:true, error:null})

    useEffect(()=>{

        // volviendo a poner los valores por default al hacer una peticion
        // para que el loading aparezca entre peticiones de frese y frese
        setState({data:null, loading:true, error:null})

        fetch(url)
            .then(resp=>resp.json())
            .then(data=>{
                setState({
                    loading:false,
                    error:null,
                    data
                })
            })

    },[url])

    return state
}
