import expenses from '../fixtures/expenses';
import selectTotalExpense from '../../selectors/expenses-total';

test('shold get 0 with no expense',() =>{
    const res = selectTotalExpense([]);
    expect(res).toBe(0);
})
test('shold add single expense',() =>{
    const res = selectTotalExpense([expenses[0]]);
    expect(res).toBe(195);
})
test('shold get total expense',() =>{
    const res = selectTotalExpense(expenses);
    expect(res).toBe(114195);
})

