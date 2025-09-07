// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// // const user1 = new User(1,"John", "John", 'wiceo@.com', 9712606741);
// // const user2 = new User(2,"John", "John", 'icemo@.com', 9712606741);
// // const user3 = new User(3,"John", "John", 'wicem@.com', 9712606741);
// // const user4 = new User(4,"John", "John", 'fwiceo@.com', 9712606741);
// // const user5 = new User(5,"John", "John", 'wfiemo@.com', 9712606741);
// // const user6 = new User(6,"John", "frodo", 'wicmof@.com', 9712606741);
// // const user7 = new User(7,"John", "John", 'wicemof@.com', 9712606741);
// // const user8 = new User(8,"John", "John", 'wicefmo@.com', 9712606741);
// // const user9 = new User(9,"John", "John", 'wifcemo@.com', 9712606741);
// // const user10 = new User(10,"John", "John", 'wcemo@.com', 9712606741);
// // console.log(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
//
// let users = [
// new User(1,"John", "John", 'wiceo@.com', 9712606741),
// new User(2,"John", "John", 'icemo@.com', 9712606741),
// new User(3,"John", "John", 'wicem@.com', 9712606741),
// new User(40,"John", "John", 'fwiceo@.com', 9712606741),
// new User(5,"John", "John", 'wfiemo@.com', 9712606741),
// new User(6,"John", "frodo", 'wicmof@.com', 9712606741),
// new User(7,"John", "John", 'wicemof@.com', 9712606741),
// new User(8,"John", "John", 'wicefmo@.com', 9712606741),
// new User(9,"John", "John", 'wifcemo@.com', 9712606741),
// new User(10,"John", "John", 'wcemo@.com', 9712606741)
// ];
//
// function filterFunction(user){
//         return user.id % 2 == 0;
// }
// const filteredUser = users.filter(filterFunction);
// console.log(filteredUser);
//
// function sorter(user1, user2) {
//     return user1.id - user2.id;
// }
// console.log(users.sort(sorter));


// function Client(id, name, surname , email, phone, products) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = products;
// }
// function Product(title, price) {
//     this.title = title;
//     this.prise = price;
// }
// let clients =[
//     new Client(1,'awerty', 'asd','wcemo@.com',  9712606741, [{title:'tv', prise: 1100}, {title:'phone', prise: 3100}, {title:'phone', prise: 3100}]),
//     new Client(2,'bwerty', 'asd','wcemo@.com',  9712606741, [{title:'tv', prise: 1100}, {title:'phone', prise: 3100}]),
//     new Client(3,'cwerty', 'asd','wcemo@.com',  9712606741, [{title:'tv', prise: 1100}, {title:'phone', prise: 3100}]),
//     new Client(4,'dwerty', 'asd','wcemo@.com',  9712606741, [{title:'tv', prise: 1100}, {title:'phone', prise: 3100}]),
//     new Client(5,'ewerty', 'asd','wcemo@.com',  9712606741, [{title:'tv', prise: 1100}, {title:'phone', prise: 3100}]),
//     new Client(6,'fwerty', 'asd','wcemo@.com',  9712606741, [{title:'tv', prise: 1100}, {title:'phone', prise: 3100}]),
//     new Client(7,'gwerty', 'asd','wcemo@.com',  9712606741, [{title:'tv', prise: 1100}, {title:'phone', prise: 3100}, {title:'phone', prise: 3100}]),
//     new Client(8,'hwerty', 'asd','wcemo@.com',  9712606741, [{title:'tv', prise: 1100}, {title:'phone', prise: 3100}]),
//     new Client(9,'jwerty', 'asd','wcemo@.com',  9712606741, [{title:'tv', prise: 1100}, {title:'phone', prise: 3100}])
// ];
// console.log(clients[0].order);
//
// // function sorter(client1, client2) {
// //     return client1.order.length - client2.order.length;
// // }
// // console.log(clients.sort(sorter))
// const sort = clients.sort((a, b) => a.order.length - b.order.length);
// console.log(sort);

// function Car(model, produser, year, maxSpeed, engineVolum) {
//     this.model = model;
//     this.produser = produser;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolum = engineVolum;
//     this.drive = function(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function(){
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     };
//     this.increaseMaxSpeed = function(speedToAdd){
//         if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
//     }
//     this.changeYear = function(year){
//         if (year > 1815) this.year = year;
//     }
//     this.addDriver = function(driver){
//         if (driver) this.driver = driver;
//     }
// }
// const car = new Car('reno','reno',2006, 140, 1.5);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(2020);
// car.addDriver('Oleksiy');
// console.log(car);

// class Car  {
//     constructor(model, produser, year, maxSpeed, engineVolum){
//         this.model = model;
//         this.produser = produser;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolum = engineVolum;
//     }
//         drive(){
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//         };
//         info(){
//             for (const key in this) {
//                 console.log(key, this[key]);
//             }
//         };
//         increaseMaxSpeed(speedToAdd) {
//             if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
//         }
//         changeYear(year){
//             if (year > 1815) this.year = year;
//         }
//         addDriver (driver){
//             if (driver) this.driver = driver;
//         }
//
// }
// const car = new Car('reno','reno',2006, 140, 1.5);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(200);
// car.changeYear(2020);
// car.addDriver('Oleksiy');
// console.log(car);

// class popelushka {
//     constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
// }
// class Prince {
//     constructor(name, age, slipper) {
//         this.name = name;
//         this.age = age;
//         this.slipper = slipper ;
//     }
// }
// const popelushkas =[
//     new popelushka('ola', 18, 23),
//     new popelushka('ola', 19, 23),
//     new popelushka('ola', 17, 24),
//     new popelushka('ola', 28, 25),
//     new popelushka('ola', 38, 22),
//     new popelushka('olala', 21, 21),
//     new popelushka('ola', 22, 25),
//     new popelushka('ola', 24, 23),
//     new popelushka('ola', 20, 26),
//     new popelushka('ola', 18, 27),
// ];
// const prince = new Prince('qwrrt', 1234, 21);
// // for (const popelushka of popelushkas) {
// // if (popelushka.footsize === prince.slipper) {
// //     prince.wife = popelushka;
// // }
// // }
// console.log(prince);
// const find = popelushkas.find(popelushka => popelushka.footsize === prince.slipper);
// console.log(find);



Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i + 1, this); // передаємо елемент, індекс і весь масив
    }
};
const arr = [1, 2, 3];

arr.myForEach((item, index) => {
    console.log(`Index ${index}: Value ${item}`);
});

Array.prototype.myFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
const nums = [1, 2, 3, 4, 5, 6];

const even = nums.myFilter(num => num % 2 === 0);

console.log(even); // [2, 4, 6]