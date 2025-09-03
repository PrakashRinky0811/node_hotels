console.log("this is my indesx .js file");
console.log("this is my first tutorial");
console.log("this is my random .js file");
console.log("this is my satya tutorial");

//process.exit(1);
//process.exit(0);

//process.exit(1);
let a = 6;
let b = 5;
let ans = a + b;

const name = 'prakash';
console.log(name);
console.log(ans);
console.log(typeof name);

const cars = ['bmw', 'ferrari', 'maruti', 32];
cars.push('tesla');
console.log(cars[3]);
console.log(cars);

//for loop and if 
var hour = 16;
if(hour < 12){
    console.log("we are not allowed");
}else{
    console.log('we are allowed');
}

var count = 10;
for(var i = 0; i < count; i++){
    process.stdout.write(i + " ");
    //console.log(i);
}

//object
const person = {
    name : 'prakash',
    age : 30,
    isStudent : false,
    hobbies : ['dancing', 'gymming', 'cooking']
};

console.log(person);
console.log(person.name);
console.log(person.name, person.age, person.hobbies);

//fuctions
const age = [32,22,16,11,42,10,17,43];
const result = age.filter(checkAge);

function checkAge(age){
    return age <= 18
}

console.log(result);

//prompt
/*var prompt = require('prompt-sync')();
const stdage = prompt("please enter your age");
if(stdage < 18){
    console.log('you get 20% discount ');
}else{
    console.log('you got 10% discount');
}*/