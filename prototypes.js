'use strict';

// Prototypes

// typeof person
// 'object'
// typeof person1
// 'object'

const person1 = {
    name: 'Andrii',
    age: 28,
    greet: function () {
        console.log('Hello');
        return;
    },
};

// ?
const person = new Object({
    name: 'Andrii',
    age: 28,
    greet: function () {
        console.log('Hello');
        return;
    },
});

// Add new property to global object propertys. Person also inherit '.sayHello' property
Object.prototype.sayHello = function () {
    console.log('Hello!!');
};

// Person is prototype for lena. lena has '.name .age .greet' too
const lena = Object.create(person);
// Add new property with value to lena
lena.name = 'Elena';

const str = 'I am string'; // str.length ...   (type is 'string'. But it also has global object properties)

//?
const strAsObj = new String('I am new one string'); // type of strAsObj = object !!! it also has global object properties !!!

// typeof str
// 'string'
// typeof strAsObj
// 'object'
