const promise = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    resolve('My data');
    // reject('Some thing is wrong');
  },5000);
});

console.log('before');

promise.then((data)=>{
console.log(data);
return promise = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    resolve('My data');
    // reject('Some thing is wrong');
  },5000);
});
  }).then((str) =>{
  console.log(str) //return from first promise will be arguemrnt for second promise
}).catch((error)=>{
console.log('error',error)
});

console.log('after');