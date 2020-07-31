import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { HooksApp } from '../HooksApp';
import toJson from 'enzyme-to-json';

describe('Prueba en el componenete <HooksApp />', () => {
  
  configure({adapter: new Adapter()});
  test('Debe de mostrarse correctamente', () => {
    
    const wrapper = shallow( <HooksApp /> ); 
    expect(toJson(wrapper)).toMatchSnapshot();
  
  });

});