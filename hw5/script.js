// function calc (a, b) {
//     let sum = a * b;
//     return sum;
// }
// let sum1 = calc(10, 20);
// console.log(sum1);

let calc = (a, b) => a * b;
console.log(calc(10, 20));

// function roundSquare (radius) {
//     return Math.PI * radius * radius;
// }
// // let roundSquare = calc(10);
// console.log(roundSquare(10));

let roundSquare = (radius) => Math.PI * radius * radius;
console.log(roundSquare(10));

// function area (radius, height) {
//     return 2*Math.PI * radius * height;
// }
// // let roundSquare = calc(10);
// console.log(area(10, 20));

let area = (radius, height) => 2*Math.PI * radius * height;
console.log(area(10,20));

// function foobar (array) {
//     for (const item of array) {
//         console.log(item);
//     }
// }

let foobar = (array) => {for (const item of array) {
    console.log(item);
} }

// function foobar2 () {
//     document.write(`<p>Lorem ipsum dolor.</p>`);
// }
// foobar2();

let foobar2 = () => {
    document.write(`<p>Lorem ipsum dolor.</p>`);
}
foobar2();

// function foobar3 (li) {
//     document.write(`
// <ul>
// <li>${li}</li>
// <li>${li}</li>
// <li>${li}</li>
// </ul>
// `);
// }
// foobar3('lorem ipsum dolor.');

let foobar3 = (li) => {
    document.write(`
 <ul>
 <li>${li}</li>
 <li>${li}</li>
 <li>${li}</li>
 </ul>
`);
}
foobar3('lorem ipsum dolor.');

// function foobar (text, counter) {
//     document.write('<ul>');
//     for (let i = 0; i < counter; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>');
// }
// foobar('octen', 30);

let foobar4 = (text, counter) => {
    document.write('<ul>');
     for (let i = 0; i < counter; i++) {
         document.write(`<li>${text}</li>`);
     }
    document.write('</ul>');
}
foobar4(['octen'], 30);

// function foobar (arrayPrimitive) {
//     document.write('<ul>');
//     for (const item of arrayPrimitive) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write('</ul>');
// }
// foobar(['octen', 30, 40, 50]);

let foobar5 = (arrayPrimitive) => {
    document.write('<ul>');
     for (const item of arrayPrimitive) {
         document.write(`<li>${item}</li>`);
     }
    document.write('</ul>');
}
foobar5(['octen', 30, 40, 50]);

// function foobar (users) {
//     for (const user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
//
//     }
// }
// foobar([
//     {id:1, name: 'ivan', age: 21},
//     {id:2, name: 'ivan', age: 21},
//     {id:3, name: 'ivan', age: 21},
//     {id:4, name: 'ivan', age: 21},
//     {id:5, name: 'ivan', age: 21}
//
// ]);

let foobar6 = (users) => {
    for (const user of users) {
         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);

    }
}
foobar6([
    {id:1, name: 'ivan', age: 21},
    {id:2, name: 'ivan', age: 21},
    {id:3, name: 'ivan', age: 21},
    {id:4, name: 'ivan', age: 21},
    {id:5, name: 'ivan', age: 21}

]);

// function arrayMinValue (numbers) {
//     let min = numbers[0];
//     for (const number of numbers) {
//         if (number < min) {
//             min = number;
//         }
//     }
//     return min;
// }
// console.log(arrayMinValue([1, 2, 3, 4, -23, 34, -45, 780]));

let foobar7 = (numbers) => {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(foobar7([1, 2, 3, 4, -23, 34, -45, 780]));

// function sum (arr) {
//     let basket = 0;
//     for (const item of arr) {
//       basket += item;
//     }
//     return basket;
// }
// console.log(sum([1, 2, 3, 4, -23, 34, -45, 780]));

let sum = (arr) => {
    let basket = 0;
    for (const item of arr) {
      basket += item;
    }
    return basket;
}
console.log(sum([1, 2, 3, 4]));

// function swap (arr, i1, i2) {
//     let temp = arr[i1]; //11
//     arr[i1] = arr[i2];
//     arr[i2] = temp;
//     return arr;
// }
// console.log(swap([11,22,33,44],0, 1) )

let swap = (arr, i1, i2) => {
    let temp = arr[i1]; //11
    arr[i1] = arr[i2];
    arr[i2] = temp;
    return arr;
}
console.log(swap([11,22,33,44],0, 1) )

// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//     for (let i = 0; i < currencyValues.length; i++) {
//         if (currencyValues[i].currency === exchangeCurrency) {
//             return sumUAH / currencyValues[i].value;
//         }
//     }
// }
// console.log(exchange(10000,[
//     {currency:'USD',value:'42'},
//     {currency:'EUR',value:'49'}
// ], 'EUR'));

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return sumUAH / currencyValues[i].value;
        }
    }
}
console.log(exchange(10000,[
    {currency:'USD',value:'42'},
    {currency:'EUR',value:'49'}
], 'USD'));
