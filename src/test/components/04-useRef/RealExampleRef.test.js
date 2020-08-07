import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en el <RealExampleRef />', () => {
  
  configure({adapter: new Adapter()});

  // como vamos a ocupar el wraper en todos los test lo ponemos afuera de forma gobal
  // shallow se usa para evaluar el componente de manera aislada
  const wrapper = shallow(<RealExampleRef /> )

  test('Debe mostrarse correctamente', () => {
  
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

  })

  test('Debe de mostrarse el componente <MultipleCustomHooks /> ', () => {
    
    wrapper.find('button').simulate('click')
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

  });

})
