// react-test-renderer
//yarn add react-test-renderer@latest
// yarn add enzyme@3.0.0 enzyme-adapter-react-16@1.0.0 raf@3.3.2
// yarn add enzyme-to-json@3.0.1
import {shallow} from 'enzyme';
// import ReactShallowRenderer from 'react-test-renderer/shallow'; // shallow is just for components and not for childs
import React from 'react';
import Header from '../../components/Header';
// import toJSON from 'enzyme-to-json';

test('should render Header correctly',()=>{
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot(); // so, getrender output gets the render output, after running first time with snapshot it will pass and take the snapshot of component, now if u make any changes by mistake or intentionally, it will give error, to set mistake just set it, or to accept changes press u and it will update the new snapshot
})
//snapshot will help us to keep track of our changes


