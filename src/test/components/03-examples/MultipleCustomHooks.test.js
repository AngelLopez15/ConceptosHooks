import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks"
import toJson from 'enzyme-to-json';
import { useFetch } from '../../../hooks/useFetch';
import { useCounterSimple } from '../../../hooks/useCounterSimple';

jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounterSimple')

describe('Prueebas en <MultipleCustomHooks />', () => {
  configure({adapter: new Adapter()});

  useCounterSimple.mockReturnValue({
    counter:1,
    incremento:()=>{}
  })

  test('Debe de mostarse correctamente', () => {
    
    useFetch.mockReturnValue({
      data:null,
      loading:null,
      error:null
    })

    const wrapper = shallow(<MultipleCustomHooks /> )

    expect(toJson(wrapper)).toMatchSnapshot();
  })
  
  test('Debe de mostrar la información', () => {

    useFetch.mockReturnValue({
      data:[{
        author:'Angel',
        quote:'Hola, Mundo'
      }],
      loading:false,
      error:null
    })

    const wrapper = shallow(<MultipleCustomHooks /> )
    expect(wrapper.find('.alert').exists()).toBe(false)
    expect(wrapper.find('.mb-0').text().trim()).toBe('Hola, Mundo')
    expect(wrapper.find('footer').text().trim()).toBe('Angel')

  });


})
