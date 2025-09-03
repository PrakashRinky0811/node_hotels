// console.log("server file is running");

// function add(a, b){
//     return a + b;
// }


// var add = function(a,b){
//     return a+b;
// }

//var add = (a,b) =>{return a + b;}
/* var add = (a,b) => a+b;
var result = add(2,12);
console.log(result);

(function(){
    console.log('prakash is added');
})(); */

// cALLBACK FUNCTION
/* function callback(){
    console.log("please go to the market after done with calculation...");
}

var add = function(a, b, callback){
    var result = a + b;
    console.log('result : ' + result);
    callback();
}

add(12,50,callback);
add(12,50, () => console.log("add completed")); */
/* 
var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greetings.txt' , ' Hi ' +user.username + ' !\n', () => {
    console.log(' file is created ');
});

console.log(os); */

/* const notes = require('./notes.js');
var _ = require('lodash');

var age = notes.age;
var result = notes.addNumber(age + 16
)
console.log(age);
console.log('result is now age' +result);

var data = ['person', 1,2,2,4,5,4,1,'name','age'];
var filter = _.uniq(data);
console.log(filter);
console.log(_.isString('prakash')); */

//Converting JSON into object form
/* const jsonString = '{"name" : "prakash", "age" : 30, "city" : "New York"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
console.log(jsonObject.name);

//object into json
const objectToConvert = {
    name : "Alice",
    age : 25,
    city : "Banglore"
};
const json_object = JSON.stringify(objectToConvert);
console.log(json_object);

console.log(typeof json_object); */

