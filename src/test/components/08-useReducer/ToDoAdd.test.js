import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ToDoAdd } from '../../../components/08-useReducer/ToDoAdd';

describe('Pruebas en <ToDoAdd />', () => {

  configure({adapter: new Adapter()});

  const handleAddToDo= jest.fn()

  const wrapper = shallow(
    <ToDoAdd
      handleAddToDo={handleAddToDo}
    />
  )

  test('Debe de mostarse correctamente', () => {
    
    expect(toJson(wrapper)).toMatchSnapshot();

  })
  
  test('No debe de llamar handleAddToDo', () => {
    
    const formSubmit = wrapper.find('form').prop('onSubmit')

    formSubmit({preventDefault(){}})

    expect(handleAddToDo).toHaveBeenCalledTimes(0)

  })
  

  test('Debe de llamar la funcion handleAddToDo', () => {
    
    const value='Aprender React'
    wrapper.find('input').simulate('change',{
      target:{
        value,
        name:'description'
      }
    })

    const formSubmit = wrapper.find('form').prop('onSubmit')

    formSubmit({preventDefault(){}})

    expect(handleAddToDo).toHaveBeenCalledTimes(1)
    expect(handleAddToDo).toHaveBeenCalledWith(expect.any(Object))
    expect(handleAddToDo).toHaveBeenCalledWith({
      id:expect.any(Number),
      desc:value,
      done:false
    })

    expect(wrapper.find('input').prop('value')).toBe('')

  });


})
