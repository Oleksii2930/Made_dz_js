// let arr = [10, "oleksiy", true, false, 313, 20, "qwerty", "a", 26373, 8283773];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);
// console.log(arr);
// // hw2-2
// let book1 = {title:'', pageCount:"", genre:""};
// let book2 = {title:'', pageCount:"", genre:""};
// let book3 = {title:'', pageCount:"", genre:""};
//
// let book4 = {title:'', pageCount:"", genre:"", authors:[{name:"", age:""}]};
// let book5 = {title:'', pageCount:"", genre:"", authors:[{name:"", age:""}]};
// let book6 = {title:'', pageCount:"", genre:"", authors:[{name:"", age:""}]};
//hw2-3
// let users = [
//     { name: "Ivan", username: "ivan123", password: "pass123" },
//     { name: "Olena", username: "olena456", password: "secure456" },
//     { name: "Oksana", username: "oksana789", password: "abc789" },
//     { name: "Petro", username: "petro321", password: "petroPass" },
//     { name: "Marta", username: "marta654", password: "marta2024" },
//     { name: "Andrii", username: "andrii007", password: "bond007" },
//     { name: "Nina", username: "nina999", password: "ninaSecure" },
//     { name: "Dmytro", username: "dima888", password: "dimaPass" },
//     { name: "Sofia", username: "sofia777", password: "sof123" },
//     { name: "Taras", username: "taras333", password: "tarasSecret" }
// ];
//
// console.log(users[0]["password"]);
// console.log(users[1]["password"]);
// console.log(users[2]["password"]);
// console.log(users[3]["password"]);
// console.log(users[4]["password"]);
// console.log(users[5]["password"]);
// console.log(users[6]["password"]);
// console.log(users[7]["password"]);
// console.log(users[8]["password"]);
// console.log(users[9]["password"]);
//hw2-4
// let temps = [
//     {day:'Monday', values:[16, 17, 15]},
//     {day:'Tuesday', values:[14, 15, 14]},
//     {day:'Wednesday', values:[16, 17, 15]},
//     {day:'Thursday', values:[18, 20, 20]},
//     {day:'Friday', values:[16, 17, 15]},
//     {day:'Saturday', values:[24, 26, 25]},
//     {day:'Sunday', values:[27, 30, 26]},
// ]
// hw2-5
// let x = -3;
// if (x!==0) {
//     console.log('вірно');
// }
// else {
//     console.log('невірно');
// }
// // hw2-6
// let time = 59;
// if (time>=0 && time<15 ) {
//     console.log(1)
// }
// else if (time>=15 && time<30) {
//     console.log(2)
// }
// else if (time>=30 && time<45) {
//     console.log(3)
// }
// else if (time>=45 && time<60) {
//     console.log(4)
// }
//hw2-6
let day = 31;
if (day >= 0 && day <= 10) {
    console.log(1)
}
else if (day > 10 && day <= 20) {
    console.log(2)
}
else if (day > 20 && day <= 31) {
    console.log(3)
}
// hw2-7
let key ='3';
switch (key) {
    case '1': console.log('Monday');
    break;
    case '2': console.log('Tuesday');
    break;
    case '3': console.log('Wednesday');
    break;
    case '4': console.log('Thursday');
    break;
    case '5': console.log('Friday');
    break;
    case '6': console.log('Saturday');
    break;
    case '7': console.log('Sunday');
    break;
}
//hw2-8
let a = 10;
let b = 20;
if (a>b) {
    console.log(a);
}
else if (b>a) {
    console.log(b);
}
else if (b===a) {
    console.log('===');
}
// hw2-9
// let x = 0;
// if (x === 0 || x === null || x === undefined || x === NaN || x === 4 || x === '') {
//      x = 'default';
// }
let x = 0;
if (!x) {
    x = 'default';
}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration >= 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration >= 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration >= 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration >= 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration >= 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration >= 5) {
    console.log('Супер');
}

