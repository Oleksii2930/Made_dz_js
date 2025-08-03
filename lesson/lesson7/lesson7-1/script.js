// function User(name, age, status){
// this.name = name;
// this.age = age;
// this.status = status;
//     console.log(this);
// }
// new User('asd', 123, true) // ФУНКЦІЇ КОНСТРУКТОРИ

// function User(name, age, status){
// this.name = name;
// this.age = age;
// this.status = status;
// this.wife = wife
// }

function User(name, age, status, wife, wifeName, wifeAge ) {
this.name = name;
this.age = age;
this.status = status;
this.wife = {name: wifeName, age: wifeAge};
}
let user = new User('asd',123,true,'anna', 28)
console.log(user)