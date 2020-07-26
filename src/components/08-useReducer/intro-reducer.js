// definiendo el estado inicial
// el nombre de la funcion puede tener cualquier nombre

const initialState = [{
    id:1,
    todo:'Comprar el pan',
    done:false,
}]

// creando la funcion reducer
// debemos enviar como argumentos el state y una accion
// las acciones son las que van a modificar el state
const todoReducer = (state=initialState, action)=>{
    // Esta es la funcion que no pude ser asincrona ni usar otras funciones
    // debe ser capaz de hacer todo con su state y su accion
    //  manejando la logica para agregar una nueva tarea
    // Ponemos un ternario para que si la accion tiene type haga el if si no que no haga nada.
    // Aunque lo mas facil es no ejecutar la funcion hasta que no tenga agl 
    if (action?.type === 'agregar') {
        // este es el nuevo state que vamos a retornar
        return [...state, action.payload]
    }

    // siempre debemos regresar un estado aunque no hagamosnada 
    return state
}

let todoList = todoReducer() 

// Para agregar mas tareas

const newTodo= [{
    id:2,
    todo:'Comprar el pan',
    done:false,
}]

// creando la accion
const agregarTodoAction = {
    //es un estandar que la propiedad que le dice al reducer que tipo de accion es
    // se llame type 
    type:'agregar',
    // es un estandar que el nuevo elemento se llame payload
    payload:newTodo
}

todoList = todoReducer(todoList, agregarTodoAction)




console.log(todoList)