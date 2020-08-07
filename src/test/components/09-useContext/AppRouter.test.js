import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <AppRouter />', () => {
  
  configure({adapter: new Adapter()});

  const user={
    id:1,
    name:'Angel'
  }

  const wrapper = mount(
    <UserContext.Provider
      value={{user}}
    >
      <AppRouter />
    </UserContext.Provider>
  )

  test('Debe de mostrarse correctamente', () => {
    
    expect(toJson(wrapper)).toMatchSnapshot();

  })
  

});