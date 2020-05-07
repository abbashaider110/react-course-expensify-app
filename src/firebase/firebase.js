import * as firebase from 'firebase';// * as means it takes all named exports from firebase and save them in variable firebase

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  //provider is a way to provide an authentication
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, database as default, googleAuthProvider};








//   database.ref('expenses').on('child_removed', (snapshot) =>{ // this triggers whenever a child is removed
//       console.log(snapshot.key,snapshot.val());
//   });

//   database.ref('expenses').on('child_changed', (snapshot) =>{
//       console.log(snapshot.key,snapshot.val());
//   });
//   database.ref('expenses').on('child_added', (snapshot) =>{
//       console.log(snapshot.key,snapshot.val());
//   });

//   database.ref('expenses').on('value', (snapshot) =>{
//       const expenses =[];
//       snapshot.forEach((childSnapshot) =>{
//       expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//       })
//     })
//       console.log(expenses);
//   }, (e) =>{
//       console.log('There is an error', e);
//   }
//   );

//   database.ref('expenses/-M6_G7lZqjl-u1vw0tCY').update({
//       description: 'Rent'
//   });

//   database.ref('expenses').once('value')
//   .then((snapshot) =>{
//       const expenses = [];
//       snapshot.forEach((childSnapshot) =>{
//           expenses.push({
//               id: childSnapshot.key,
//               ...childSnapshot.val()
//           })
//       })
//       console.log(expenses);
//   })

//   database.ref('expenses').push({
//       description: 'Rent',
//       note:'',
//       amount: 109500,
//       createdAt: 195662611616
//   });
//   database.ref('expenses').push({
//       description: 'Bill',
//       note:'',
//       amount: 9500,
//       createdAt: 5662611616
//   });
//   database.ref('expenses').push({
//       description: 'Credit',
//       note:'',
//       amount: 500,
//       createdAt: 2611616
//   });
// database.ref('expenses/-M6_G7lZqjl-u1vw0tCY').update({
//     description: 'Nothing'
// });

//   database.ref('expenses/M6_FMV7a0eZe-0vpnDm').update({
//       description:'nothing'
//   });
//   database.ref().on('value',(snapshot) =>{
//       const val = snapshot.val();
//       console.log(`${val.name} is a ${val.job.title} in ${val.job.company}`);
//   });

//   database.ref('name').set('Mike');

//   const onValueChange =  database.ref().on('value', (snapshot)=>{ // now by using on, we subscribe to everytime data changes, we run callback function
//   console.log(snapshot.val());
//   }, (e) =>{
//       console.log('error fetchign data', e); // this third function is to get error
//   }) // on returns a functions as well and we can save it in a variable

//   setTimeout(() =>{
//   database.ref('age').set(32);
//   },3500);
//   setTimeout(() =>{
//   database.ref().off();
//   },7000);
//   setTimeout(() =>{
//   database.ref('age').set(25);
//   },10500);

//   database.ref().once('value') // first arhuement is value, we will go for complex in future
//   .then((snapshot)=>{ //then takes a arguement we can say snapshot, that is a data we are requesting and it is returing
//       const val = snapshot.val(); // val is a function with no arguements, it returns data we requested
//       console.log(val);
//   }).catch((e)=>{
//       console.log('error fetching data',e)
//   })

//   database.ref().set({ // ref is ref of location in database, you have to pass the location as arguement, if not, then its root
//    name: 'Abbas Haider',
//    age: 29,
//    stressLevel: 6,
//    isSingle: false,
//    job: {
//        title:'developer',
//        company:'google'
//     },
//    location: {
//        city: 'Missisauga',
//        state: 'Ontario'
//    }
//   }).then(()=>{
//       console.log('data');
//   }).catch((e)=>{
//       console.log('This is error',e);
//   })
//   //set can be called with object or string or number , but update has to be called with object
//   // update would update the root element but not the nested child, but we can do that with weird syntax, i did it below 'location/city'

//   // firebase is realtime, it overwrites the data

//   // database.ref().set('This is my database);

// //   database.ref('age').set(30);

//   database.ref('attributes').set({
//       height: '175cm',
//       weight: '80kg'
//   }).then(()=>{
//       console.log('data');
//   }).catch((e)=>{
//       console.log(e);
//   })

// //   database.ref('isSingle').remove().then(()=> console.log('succeded')).catch((e)=> console.log('error'));

// // database.ref('isSingle').set(null);

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'amazon',
//     'location/city': 'calgary'
// })