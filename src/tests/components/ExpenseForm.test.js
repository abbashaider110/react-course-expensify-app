import React from  'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render expense form', () =>{
 const wrapper = shallow(<ExpenseForm/>);
 expect(wrapper).toMatchSnapshot();
});

test('should render expense form with data',() =>{
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form submission', () =>{
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault: () =>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test('should render description',() =>{
    const value = 'A new description';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change',{ // at 0 means index 0,
        target: {value} 
    });
    expect(wrapper.state('description')).toBe(value);

})

test('should render new note',() =>{
    const value = 'A new note';
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('textarea').simulate('change',{
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
})
test('should render amount if data is correct',() =>{
    const value = '12.22';
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
})
test('should not render amount if data is not correct',() =>{
    const value = '12.222';
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('amount')).toBe('');
})

test('should call onsubmit prop for valid form submission',() => {
    const onSubmitSpy = jest.fn(); // jest fn is function which resturns a spy, and we save it in a variable
    // onSubmitSpy('Abbas','Karachi');
    // expect(onSubmitSpy).toHaveBeenCalledWith('Abbas','Karachi');
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]} onSubmit = {onSubmitSpy} />);
    wrapper.find('form').simulate('submit',{
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt,
    })
})

test('should set new date on change', () =>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now); //this prop is an enzyme method, which gives access tp components props
    expect(wrapper.state('createdAt')).toEqual(now);
})

test('should set on focused',() =>{
    const focused = true;
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});
    expect(wrapper.state('calenderFocused')).toBe(focused);
})