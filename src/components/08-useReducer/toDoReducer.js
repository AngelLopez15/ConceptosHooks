// creando el reducer en un archivo aparte por que 
// suele suceder que crece mucho esta duncion

export const todoReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'add':
            return [...state, action.payload]
        case 'delete':
            return state.filter(toDo=>toDo.id !== action.payload)
        default:
            return state
    }
}