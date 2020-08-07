const { renderHook, act } = require("@testing-library/react-hooks");
const { useCounter } = require("../../hooks/useCounter");

describe('Pruebas en useCounter', () => {
  
  test('debe de retornar los valores por default', () => {
    
    const {result}= renderHook(()=> useCounter()) 

    // console.log(result.current)
    expect(result.current.state).toBe(0)
    expect(typeof result.current.incremento).toBe('function')
    expect(typeof result.current.decremento).toBe('function')
    expect(typeof result.current.reset).toBe('function')
  });

  test('Debe tener el counter en 100', () => {
    const {result}= renderHook(()=> useCounter(100)) 
    expect(result.current.state).toBe(100)
  });

  test('Debe de incrementar el counter en 1', () => {
    const {result}= renderHook(()=> useCounter(100))
    const {incremento} = result.current

    act(()=>{
      incremento(1)
    })

    const {state} = result.current
    expect(state).toBe(101)

  });

  test('Debe de decrementar en 1', () => {
    const {result}= renderHook(()=> useCounter(100))
    const {decremento} = result.current

    act(()=>{
      decremento(1)
    })

    const {state} = result.current
    expect(state).toBe(99)

  });

  test('Debe reseter al valor por default', () => {
    const {result}= renderHook(()=> useCounter(100))
    const {reset} = result.current
    const {incremento} = result.current

    act(()=>{
      incremento(1)
    })

    act(()=>{
      reset()
    })

    const {state} = result.current
    expect(state).toBe(100)

  });

});