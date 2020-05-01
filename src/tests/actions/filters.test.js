import {setStartDate,setEndDate,setTextFilter,sortByDate,sortByAmount} from  '../../actions/filters';
import moment from 'moment';

test('for startdate',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})
test('for endtdate',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('sort by date', () =>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})
test('sort by amount', () =>{
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'}) // thats a short version
})

test('set by filter with value', () =>{
    const action = setTextFilter('rent');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'rent'
    })
})
test('set by filter with value', () =>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})
