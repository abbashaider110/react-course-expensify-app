// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState,action) =>{
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