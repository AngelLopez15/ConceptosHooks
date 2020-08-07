const { renderHook,act } = require("@testing-library/react-hooks");
const { useForm } = require("../../hooks/useForm");

describe('Pruebas en useForm', () => {
  const initialForm={
    name:'Angel',
    email:'fernanado@gmail.com'
  }

  test('Debe de regresar un formulario por default', () => {
    const {result} =renderHook(()=>useForm(initialForm))
    const [formValues, handleInputChange, reset] = result.current

    expect(formValues).toEqual(initialForm)
    expect(typeof handleInputChange).toBe('function')
    expect(typeof reset).toBe('function')

  });

  test('Debe de cambiar  el valor del formulario (cambiar name)', () => {
    const {result} =renderHook(()=>useForm(initialForm))
    const [, handleInputChange] = result.current

    act(()=>{
      handleInputChange({
        target:{
          name:'name',
          value:'Octavio'
        }
      })
    })

    const [formValues]= result.current
    expect(formValues).toEqual({...initialForm, name:'Octavio'})
    
  });

  test('Debe de re-establecer el formulario con Reset', () => {
    const {result} =renderHook(()=>useForm(initialForm))
    const [, handleInputChange,reset] = result.current

    act(()=>{
      handleInputChange({
        target:{
          name:'name',
          value:'Octavio'
        }
      })
      reset()
    })

    const [formValues]= result.current
    expect(formValues).toEqual(initialForm)

  })
  
});