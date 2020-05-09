import {shallow} from 'enzyme';
import React from 'react';
import LoadingPage from '../../components/LoadingPage';

test('snapshot for laoding page', () =>{
    const wrapper = shallow(<LoadingPage/>);
    expect(wrapper).toMatchSnapshot();
})