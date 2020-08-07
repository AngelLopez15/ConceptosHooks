// creando el reducer en un archivo aparte por que 
// suele suceder que crece mucho esta funcion

export const todoReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'add':
            return [...state, action.payload]
        case 'delete':
            // Buscamos todos los toDos que sean diferentes al id del toDo
            // del payload. Ose el action.payload es igual al toDo.id que no queremos
            return state.filter(toDo=>toDo.id !== action.payload)
        case 'toggle':
            return state.map(toDo=>
                (toDo.id===action.payload)
                    ?{...toDo, done: !toDo.done}
                    :toDo
                )
        case 'toggle-optional':
            return state.map(toDo=>{
                if (toDo.id===action.payload) {
                    return{
                        ...toDo,
                        done:!toDo.done
                    }
                } else {
                    return toDo
                }
            })
        default:
            return state
    }
}