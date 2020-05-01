import React from 'react';
import moment from 'moment';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters,altFilters} from '../fixtures/filters';

let setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate,wrapper;

beforeEach(() =>{
setTextFilter = jest.fn();
sortByDate = jest.fn();
sortByAmount = jest.fn();
setStartDate = jest.fn();
setEndDate = jest.fn();
wrapper = shallow(<ExpenseListFilters
    filters = {filters}
    setTextFilter = {setTextFilter}
    sortByAmount = {sortByAmount}
    sortByDate = {sortByDate}
    setStartDate = {setStartDate}
    setEndDate = {setEndDate}
    />)
});

test('should render expensefilter with default', () =>{
    expect(wrapper).toMatchSnapshot();
});

test('should render expensefilter with alt values', () =>{
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
})

test('should change text', ()=>{
    const value = 'rent'
    wrapper.find('input').simulate('change',{
        target: {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
})

test('should call sortbydate', () =>{
    const value = 'date'
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByDate).toHaveBeenCalled();
})
test('should call sortbyamount', () =>{
    const value = 'amount'
    
    wrapper.find('select').simulate('change',{
        target:{value}
    });
    expect(sortByAmount).toHaveBeenCalled();
})

test('should do date change', () =>{
    const startDate = moment(0).add(4,'years');
    const endDate = moment(0).add(8,'years');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})

test('should do calender focused', () =>{
    const calenderFocused = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calenderFocused);
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused);
})