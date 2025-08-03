// console.log(User);
// User.prototype.greeting = function () {
//     return `Hello my name is ${this.name}!`;
// }
// let user = new User('vasa', 12);
// console.log(user.greeting());

function User(name, age) {
    this.name = name;
    this.age = age;
}

let user = new User('vasa', 31);
user.greeting = function (msg) {
    return `${msg} my name is ${this.name}`;
};
// console.log(user.greeting('hello'));
let user2 = new User('asdsdds', 1234221);
// console.log(user.greeting.apply(user2)); //apply  підміна контексту привітання для user присвоїли ще user2
// console.log(user.greeting.call(user2, 'olla'));  //call
let greetingCopy = user.greeting.bind(user2);
console.log(greetingCopy('djhcjshcd'));


