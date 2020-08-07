import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';

describe('Pruebas en <HomeScreen />', () => {

  configure({adapter: new Adapter()});
  
  const user={
    name:'Angel',
    email:'correo@correo.com'
  }

  const wrapper = mount(
    <UserContext.Provider
      value={{
        user
      }}
    >
      <HomeScreen />
    </UserContext.Provider>
  )

  test('Debe de mostar el componente', () => {

    expect(toJson(wrapper)).toMatchSnapshot();
  
  })
  

});