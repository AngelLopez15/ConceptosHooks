import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ToDoApp } from '../../../components/08-useReducer/ToDoApp';
import { act } from '@testing-library/react';
import { demoTodos } from '../../fixtures/demosToDos';


describe('Pruebas en <ToDoApp />', () => {

  configure({adapter: new Adapter()});

  const wrapper = shallow(<ToDoApp />)

  Storage.prototype.setItem=jest.fn(()=>{})

  test('Debe de mostarse correctamente', () => {
    
    expect(toJson(wrapper)).toMatchSnapshot();

  })

  test('Debe de agregar un ToDo', () => {
    
    const wrapper = mount(<ToDoApp />)

    act(()=>{
      wrapper.find('ToDoAdd').prop('handleAddToDo')(demoTodos[0])
      wrapper.find('ToDoAdd').prop('handleAddToDo')(demoTodos[1])
    })

    expect(wrapper.find('h1').text().trim()).toBe('ToDoList App')

    expect(localStorage.setItem).toHaveBeenCalledTimes(2)
    
  });

  test('Debe de eliminar un ToDo', () => {
    
    wrapper.find('ToDoAdd').prop('handleAddToDo')(demoTodos[0])
    wrapper.find('ToDoList').prop('handleDelete')(demoTodos[0].id)


  });

});