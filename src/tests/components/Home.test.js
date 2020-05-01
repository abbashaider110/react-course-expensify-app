import {shallow} from 'enzyme';
import React from 'react';
import Home from '../../components/Home';

test('should render home page', () =>{
    const wrapper = shallow(<Home/>);
    expect(wrapper).toMatchSnapshot();
})