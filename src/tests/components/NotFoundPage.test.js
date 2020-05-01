import {shallow} from 'enzyme';
import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';

test('should render Not Found page', () =>{
    const wrapper = shallow(<NotFoundPage/>);
    expect(wrapper).toMatchSnapshot();
})