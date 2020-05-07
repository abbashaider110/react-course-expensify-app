import authReducer from '../../reducers/auth';




test('should login',() =>{
    const action = {
        type: 'LOGIN',
        uid: '123'
    };
    const state = authReducer({},action);
    expect(state.uid).toBe('123');
})
test('should logout',() =>{ 
    const action = {
        type: 'LOGOUT',
        
    };
    const state = authReducer({uid:'anything'},action);
    expect(state).toEqual({});
})