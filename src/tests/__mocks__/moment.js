// mock is used for test, kind of allow you to use fake data, instead from website 

const moment = require.requireActual('moment');

export default (timestamp = 0) =>{
return moment(timestamp);
};