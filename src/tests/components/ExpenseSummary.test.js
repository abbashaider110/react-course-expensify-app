import React from  'react';
import {shallow} from 'enzyme';
import {ExpenseSummary} from '../../components/ExpenseSummary';

test('should match snapshot with 1 expense',() =>{
    const wrapper = shallow(<ExpenseSummary expenseCount = {1} expenseTotal = {235} />);
    expect(wrapper).toMatchSnapshot();
})
test('should match snapshot with more than 1 expenses',() =>{
    const wrapper = shallow(<ExpenseSummary expenseCount = {23} expenseTotal = {23500050} />);
    expect(wrapper).toMatchSnapshot();
})

