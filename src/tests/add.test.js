// yarn test --watch (to run automated scripts, everything before -- is yarn and everything after is jest)

const add = (a,b) => a+b;
const generateGreeting = (name = 'Anynomous') => `Hello I am ${name}!`

test('should add two numbers', () =>{ // test takes 2 arguement, first name of test that is string, second is a function
    const result = add(3,4);

    // if(result !== 7){
    //     throw new Error (`You should add 4 and 3.The result was ${result}.Expect 7`)
    // }
    expect(result).toBe(7);
});

test('should match the message', () =>{
    const result  = generateGreeting('Abbas');
    expect(result).toBe(`Hello I am Abbas!`)
})

test('should get greenting with no name', ()=>{
   const result = generateGreeting();
    expect(result).toBe(`Hello I am Anynomous!`)
})