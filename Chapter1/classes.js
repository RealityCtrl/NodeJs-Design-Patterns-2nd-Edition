//Prototype
function Person(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
}

Person.prototype.getFullName = function(){
    return this.name + " " + this.surname;
};

Person.older = function(person1, person2){
    return (person1.age > person2.age) ? person1: person2;
}

class PersonUsingClass{
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    getFullName(){
        return this.name + " " + this.surname;
    }
    static older(person1, person2){
        return (person1.age > person2.age) ? person1: person2;
    }
}

class PersonWithMiddleName extends PersonUsingClass{
    constructor(name, middlename, surname, age){
        super(name, surname, age)
        this.middlename = middlename;
    }

    getFullName(){
        return this.name + " " + this.middlename + " " + this.surname;
    }
}
console.log("Prototype")
const personProto = new Person("First", "last", 20);
console.log(personProto.getFullName())

console.log("\nClass")
const personClass = new PersonUsingClass("First", "last", 20);
console.log(personClass.getFullName())

console.log("\nExtendedlass")
const personMiddleName = new PersonWithMiddleName("First", "Middle", "last", 20);
console.log(personMiddleName.getFullName())

class PersonWithGettersSetters {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    get fullname(){
        return this.name + " " + this.surname;
    }

    set fullname(fullname){
        let parts = fullname.split(' ');
        this.name = parts[0];
        this.surname = parts[1];
    }

}

console.log("\nClass Getters Setters")
const personClassGetSet = new PersonWithGettersSetters("First", "last", 20);
console.log(personClassGetSet.fullname);
console.log(personClassGetSet.fullname = 'Alan Turing');
console.log(personClassGetSet.name);

const personObject = {
    name : 'George',
    surname : 'Boole',
    get fullname(){
        return this.name + " " + this.surname;
    },

    set fullname(fullname){
        let parts = fullname.split(' ');
        this.name = parts[0];
        this.surname = parts[1];
    }

};
console.log("\nObject Getters Setters")
console.log(personObject.fullname);
console.log(personObject.fullname = 'Alan Turing');
console.log(personObject.name);
