import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    
    // Obteniendo la referencia al userContext
    const {user,setUser} = useContext(UserContext)

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
            <button className="btn btn-primary"
                onClick={()=>setUser({
                    id:123,
                    name:'Angel'
                })}
            >
                Login
            </button>
        </div>
    )
}
