    import {createStore, combineReducers} from 'redux'; // combine reducers is used when we are using more than one reducers
    import {v1 as uuid} from 'uuid';
    //yarn add uuid@latest , its for generating unique id
    //yarn add babel-plugin-transform-object-rest-spread@latest, its for using object spread
    // Add_Expense

    const addExpense = (
        {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = {}
    ) =>({
        type: 'ADD_EXPENSE',
        expense:{
        id: uuid(),
        description,
        note,
        amount,
        createdAt
        }
        
    });
    // Edit_Expense

    const editExpense = (id,updates) =>({
    type: 'EDIT_EXPENSE',
    id,
    updates
    });

    // Remove Expense

    const removeExpense = ({id} = {}) =>({
        type: 'REMOVE_EXPENSE',
        id

    });
    // Set_Text_Filter
    const setTextFilter = (text = '') =>({
    type: 'SET_TEXT_FILTER',
    text
    });
    // Sort_By_Date

    const sortByDate = () =>({
        type: 'SORT_BY_DATE'
    });
    // Sort_By_Amount
    const sortByAmount = () =>({
        type: 'SORT_BY_AMOUNT'
    });
    // Set_Start_Date
    const setStartDate = (startDate)=>({ // we didnt set the default value because by default it is undefined
    type: 'SET_START_DATE',
    startDate
    });
    // Set_End_Date
    const setEndDate = (endDate)=>({
        type: 'SET_END_DATE',
        endDate
        });
    // Expenses Reducer

    const expensesReducerDefaultState = [];

    const expensesReducer = (state = expensesReducerDefaultState,action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        
        case 'REMOVE_EXPENSE':
        return state.filter(({id}) => id !== action.id);

        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
            if(expense.id === action.id){
                return{
                ...expense, // we use spread object to merge or override the object
                ...action.updates
                }
            }else{
                return expense;
            }
            })

        default:
            return state;

    }
    };
    
    // Filter Reducer

    const filterReducersDefaultState = {text:'',sortBy:'date', startDate: undefined, endDate: undefined};

    const filterReducer = (state = filterReducersDefaultState, action) =>{
     switch(action.type){
         case 'SET_TEXT_FILTER':
             return {
                 ...state,
                 text:action.text
             }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            }

        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'date'
            }

        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.startDate
            }

        case 'SET_END_DATE':
            return{
                ...state, 
                endDate: action.endDate
            }
         default:
             return state;
     }
    };
    /**
     * Timestamps(miliseconds)
     * January 1st 1970 (unix epoch) this is zero point
     * 33400,10,-203
     */
    // visible expenses
    const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) =>{
        return expenses.filter((expense) =>{
            const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
            const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
            return startDateMatch && endDateMatch && textMatch;
        }).sort((a,b)=>{
            if(sortBy === 'date'){
                return a.createdAt < b.createdAt ? 1 : -1;
            } 
            else if (sortBy === 'amount'){
                return a.amount < b.amount ? 1 : -1;
            }   
        }) // we will use array sort method to sort, -1 means a comes first, 1 means b comes first
    };

    // Store Creation

    const store = createStore(
        combineReducers({ // combine reducers takes an arguement as an object and it combines multiple reducers
            expenses: expensesReducer,
            filters: filterReducer
        })
        );
    
    store.subscribe(() =>{
        const state = store.getState();
        const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
        console.log(visibleExpenses);

    });

   const expenseOne =  store.dispatch(addExpense({description:'rent', amount: 3100, createdAt:-1000}));
   const expenseTwo =  store.dispatch(addExpense({description:'coffee', amount: 22200,createdAt:1000}));

    // store.dispatch(removeExpense({id:expenseOne.expense.id}));

    // store.dispatch(editExpense(expenseTwo.expense.id,{amount: 500}));
    // store.dispatch(setTextFilter('coffee'));
    // store.dispatch(setTextFilter(''));
    store.dispatch(sortByAmount());
    // store.dispatch(sortByDate());
    // store.dispatch(setStartDate(-1125));
    // store.dispatch(setStartDate());
    // store.dispatch(setEndDate(1250));
    const demoState = {
        expenses:[{
            id: 'ajsbdmabsdbmasb',
            description: 'january rent',
            note: 'this was my final payment for january',
            amount: 54500, // this is in cents or penies
            createdAt: 0
        }],
        filters:{
            text: 'rent', //search text
            sortBy: 'date', 
            startDate: undefined, 
            endDate: undefined
        }
    };