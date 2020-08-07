import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ToDoListItem } from '../../../components/08-useReducer/ToDoListItem';
import { demoTodos } from '../../fixtures/demosToDos';


describe('Pruebas en <ToDoListItem 7>', () => {

  configure({adapter: new Adapter()});


  // Simulando las funciones con un metodo de Jest
  const handleDelete = jest.fn()
  const handleToggle = jest.fn()

  const wrapper = shallow (
    <ToDoListItem
      toDo={demoTodos[0]}
      index={1}
      handleDelete = {handleDelete}
      handleToggle = {handleToggle}
    />
  )

  test('Debe de mostrarse correctamente', () => {
    
    expect(toJson(wrapper)).toMatchSnapshot();

  })
  
  test('Debe de llamar la función handleDelete', () => {
    
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)

  });

  test('Debe de llamar la función handleToggle', () => {

    wrapper.find('p').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id)
  
  });

  test('Debe de mostar el texto correctamente', () => {
    
    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(`2. ${demoTodos[0].desc}`)

  });

  
  test('Debe de tener la clase complete si el toDo.done = true', () => {
    
    const todo = demoTodos[0]
    todo.done = true

    const wrapper = shallow (
      <ToDoListItem
        toDo={demoTodos[0]}
        index={1}
      />
    )
    
    expect(wrapper.find('p').hasClass('complete')).toBe(true)

  });

})
