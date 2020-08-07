const { todoReducer } = require("../../../components/08-useReducer/toDoReducer");
const { demoTodos } = require("../../fixtures/demosToDos");


describe('Pruebas en el toDoReducer', () => {

  test('Debe de retornar el estado por default', () => {
    
    // Recordar que los Reducer siempre regresan un estado
    // El reducer recibe como parametros el estado inicial y el action
    const state = todoReducer(demoTodos,{})

    expect(state).toEqual(demoTodos)

  })
  
  test('Debe de agregar un toDo', () => {

    // Creando el ToDo a agregar
    const newTodo ={
      id:3,
      desc:'Aprender Mongo',
      done:false
    }

    // Creando el action para agregar
    const action = {
      type:'add',
      payload:newTodo
    }

    const state = todoReducer(demoTodos,action)

    expect(state.length).toBe(3)
    expect(state).toEqual([...demoTodos, newTodo])

  })

  test('Debe de borrar un ToDo', () => {
    // Buscamos todos los toDos que sean diferentes al id del toDo
    // del payload. Ose el action.payload es igual al toDo.id que no queremos

    const action= {
      type:'delete',
      payload:2
    }

    const state = todoReducer(demoTodos,action)
    expect(state.length).toBe(1)
    expect(state).toEqual([demoTodos[0]])

  });

  test('Debe de hacer el Toggle el toDo', () => {
    const action= {
      type:'toggle',
      payload:1
    }

    const state = todoReducer(demoTodos,action)
    
    expect(state[0].done).toBe(true)
    expect(state[1].done).toBe(false)
  });

});