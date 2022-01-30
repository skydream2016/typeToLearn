function hello() {
    console.log('Hello', this);
}

const person = {
    name: 'Vladilen',
    age: 25,
    sayHello: hello,
    sayHellowindow: hello.bind(window),
    logInfo: function() {
        console.log(`Name is ${this.name}`);
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

person.logInfo.bind(lena)() // Name is Elena

const fnLenainflog = person.logInfo.bind(lena, 'front', '4343490349' )
fnLenainflog();