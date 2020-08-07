import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ToDoList } from '../../../components/08-useReducer/ToDoList';
import { demoTodos } from '../../fixtures/demosToDos';

describe('Pruebas en <ToDoList />', () => {
  
  configure({adapter: new Adapter()});

  const handleDelete = jest.fn()
  const handleToggle = jest.fn()

  const wrapper = shallow(
    <ToDoList 
      toDos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  )

  test('Debe de mostrarse correctamente', () => {

    expect(toJson(wrapper)).toMatchSnapshot();
  
  });

  test('Debe de tener dos elementos', () => {
    
    expect(wrapper.find('ToDoListItem').length).toBe(demoTodos.length)

    expect(wrapper.find('ToDoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function))

  });


});