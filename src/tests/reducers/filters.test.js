import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup dafault value of filter reducer',() =>{
    const state = filtersReducer(undefined,{type: '@@INIT'}); //@@INIT is action by redux
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
})

test('should set ssortBy to amount',() =>{
    const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount'); 
})
test('should set ssortBy to date',() =>{
    const currentState = {
        text:'',
        startDate:undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filtersReducer(currentState,{type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date'); 
})

test('should set text ',() =>{
    const text = ' Hi I am abbas';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined,action);
    expect(state.text).toBe(text); 

});
test('should set start date ',() =>{
    const startDate = moment(0).add(5,'days');
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined,action);
    expect(state.startDate).toEqual(startDate); 

});
test('should set endDate ',() =>{
    const endDate = moment(0).subtract(5,'days');
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined,action);
    expect(state.endDate).toEqual(endDate); 

});