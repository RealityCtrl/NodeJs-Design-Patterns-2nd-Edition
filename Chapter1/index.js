var condition = true
if(condition){

    var var_in_block = "hello";
}
console.log(var_in_block) //log hello

var condition = true
if(condition){

    let let_in_block = "hello1";
    console.log(let_in_block) //log hello1
}
//will fail as undefined
//console.log(let_in_block)

for(let i=0; i< 10; i++){
    console.log(i) // log 0-9
}
//will fail as undefined
//console.log(i)

const dictionary = {}
dictionary.name = "John"
console.log(dictionary) //{name: 'john'}

//TypeError: Assignment to constant variable
//dictionary ="some string"

//imports with const to prevent redefinition
const path = require('path')
//SyntaxError: Identifier 'path' has already been declared
//let path = './index.js' 

const numbers = [2,3,4,5,6,7]
numbers.filter(x=>{
    if(x%2 ===0){
        console.log(x + ' is even') //logs 2 4 6
        return true
    }
})

//this is not same scope as parent in function
function DelayedGreeter(name){
    this.name = name;
}

DelayedGreeter.prototype.greet = function(){
    setTimeout(function cb(){
        console.log('Hello '+this.name);
    }, 500)
};

const greeter = new DelayedGreeter('World');
greeter.greet();  //Hello undefined

//binding this
DelayedGreeter.prototype.greet = function(){
    setTimeout( (function cb(){
        console.log('Hello '+this.name);
    }).bind(this), 500)
};
const greeter2 = new DelayedGreeter('World');
greeter2.greet();  //Hello world

//arrow functions have same scope as parent
DelayedGreeter.prototype.greet = function(){
    setTimeout( () => {
        console.log('Hello '+this.name);
    }, 500)
};
const greeter3 = new DelayedGreeter('World');
greeter3.greet();  //Hello world
