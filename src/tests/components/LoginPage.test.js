import {shallow} from 'enzyme';
import React from 'react';
import {LoginPage} from '../../components/LoginPage';

test('Should render login page', () =>{
    const wrapper = shallow(<LoginPage/>);
    expect(wrapper).toMatchSnapshot();
})

test('should handle login button', () =>{
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    wrapper.find('button').simulate('Click');
    expect(startLogin).toHaveBeenCalled();
})