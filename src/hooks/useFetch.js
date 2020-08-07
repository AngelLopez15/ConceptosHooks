import { useState, useEffect, useRef } from "react"


export const useFetch = (url) => {

    // Con useRef vamos a manejar el estado de nuestro componenete. Va a iniciar en true
    // Por que cuando se inicia la aplicacion queremos ver el componenete. Sin embargo
    // cuando se hace la peticion queremos que ese componenete se oculte o que no haga
    // nada aunque le den clock y esto es para evitar
    // que lo esten presionando y provoque que nuestra aplicacion crashee
    const isMounted = useRef(true)

    const [state, setState] = useState({data:null, loading:true, error:null})

    // para manejar el useRef vamos a combinarlo con un useEffect que no hace nada mas
    // que pasar el valor de is mounted a false cuando se dispare el evento
    useEffect(()=>{
        return () =>{
            isMounted.current=false
        }
        // la dependencia vacia para que solo lo haga cunado el componenete se carga por primera vez
    },[])

    useEffect(()=>{

        // volviendo a poner los valores por default al hacer una peticion
        // para que el loading aparezca entre peticiones de frese y frese
        setState({data:null, loading:true, error:null})

        fetch(url)
            .then(resp=>resp.json())
            .then(data=>{

                // varificamos el estado del isMounted para manejar el estado de la 
                // peticion
                if (isMounted.current) {
                    setState({
                        loading:false,
                        error:null,
                        data
                    })
                }
            })
            .catch(()=>{
                setState({
                    data:null,
                    loading:false,
                    error:'No se pudo cargar la información'
                })
            })

    },[url])

    return state
}
