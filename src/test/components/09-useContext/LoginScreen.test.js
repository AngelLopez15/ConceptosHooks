import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';

describe('Pruebas en el <LoginScreen />', () => {

  configure({adapter: new Adapter()});
  
  const setUser = jest.fn()

  const wrapper = mount(
    <UserContext.Provider
      value={{
        setUser
      }}
    >
      <LoginScreen />
    </UserContext.Provider>
  )

  test('Debe de mostrarse correctamente', () => {

    expect(toJson(wrapper)).toMatchSnapshot();
    
  })
  
  test('Debe de ejecutar el setUser con el argumento esperado', () => {
    wrapper.find('button').prop('onClick')()

    expect(setUser).toHaveBeenCalledWith({
      id:123,
      name:'Angel'
    })

  });


})
