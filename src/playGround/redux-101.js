import {createStore} from 'redux';
// console.log('resux');


/**
 * Action functions
 */
const incrementCount = ({incrementBy = 1} = {}) => ({ // we destructured and set incrementBy name of variable for value and set default value 1
type: 'INCREMENT',
incrementBy: incrementBy // or just short form incrementBy, if there is any value it will take that else, default value 1
});

const decrementCount = ({decrementBy = 1} = {}) => ({
 type: 'DECREMENT',
 decrementBy: decrementBy
});

const resetCount = (payload = {}) => ({
type: 'RESET'
});

const setCount = ({count = 1} = {}) => ({
type: 'SET',
count: count
});

/**
 * Reducers
 */

 //1. are pure functions,means output is determined by input
 //2. never change state or action
const countReducer = ((state = {count:0}, action) =>{  // now redux createStore takes a function as arguement
    
    switch(action.type){
        case 'INCREMENT':
            return{
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return{
                count: state.count - action.decrementBy
            }

        case 'SET':
            return{
                count: action.count
            }

        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }
    
    // if(action.type === 'INCREMENT'){
    //     return{
    //         count: state.count + 1
    //     }
    // } else {
    //     return state;
    // }

});

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{  // it takes a function, its used to get store every time it changes, return value from subscribe is a value to unsubscribe
    console.log(store.getState());
})

// Actions - an object that gets sent to store

//I would like to increment the count

    // store.dispatch({
    //     type: 'INCREMENT',
    //     incrementBy: 5
    // }); // dispatch sends the object to store
     // upper case is convention in redux for your action type names 
    
    // unsubscribe();   


     store.dispatch(incrementCount({incrementBy: 5}));
     store.dispatch(incrementCount());

     store.dispatch(decrementCount());
     store.dispatch(decrementCount({decrementBy:10}));
//I would like to reset the count
store.dispatch(resetCount());

store.dispatch(setCount({count: 101}));

// console.log(store.getState());