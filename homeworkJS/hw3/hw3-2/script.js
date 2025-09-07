// let arr = [1, 2, 3, 4, 5,
//     'Anna', 'Ola', 'Oleksiy', 'Andriy', 'Oksana',
//     true, false, 3, 4, 'name'];
// console.log(arr);
// console.log(arr[5]);
// console.log(arr[14]);
// console.log(arr[0]);

                // let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length) {
//     console.log('1:', arr[i]);
//     i++;
// }

// for (let i = 1; i < arr.length; i++) {
//     console.log('2:', arr[i]);
// }

// i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i]);
//     }
// i++;
// }

// i = arr.length - 1;
// while (i >= 0) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i]);
//     }
//     i--;
// }
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2  !== 0) {
//         console.log('4:', arr[i]);
//     }
//
// }
//
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2  !== 0) {
//         console.log('4:', arr[i]);
//     }
//
// }

// i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2 !== 1) {
//         console.log('5:', arr[i]);
//     }
// i++;
// }
//
// i = arr.length -1;
// while (i >= 0) {
//     if (arr[i] % 2 !== 1) {
//         console.log('5:', arr[i]);
//     }
//     i--;
// }

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2  !== 1) {
//         console.log('6:', arr[i]);
//     }
//
// }
//
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2  !== 1) {
//         console.log('6:', arr[i]);
//     }
//
// }

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3  === 0) {
//         arr[i] = 'okten';
//     }
//
// }
// console.log('7:', arr);

// for (let i = arr.length - 1; i >= 0; i--) {
//     if (typeof arr[i] === 'number' && arr[i] % 3  === 0) {
//         arr[i] = 'okten';
//     }
//
// }
// console.log( arr.slice().reverse());

// console.log(arr.slice().reverse());

// console.log('9.1: while задом наперед');
// i = arr.length - 1;
// while (i >= 0) {
//     console.log(arr[i] );
//     i--;
// }

// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log('2:', arr[i]);
// }

// let arr = ['Anna', 'Ola', 'Oleksiy', 'Andriy', 'Oksana', true, false, 3, 4, 'name'];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'boolean') { // 'number' , 'string', 'boolean'
//         console.log(arr[i]);
//     }
// }
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
// for (let i = 0; i < 100; i++) {
//     console.log('Крок: ' + i);
//     document.write('<p>Крок: ' + i + '</p>');
// }
//#zananT5FR1
//
// – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// #Tfrwls7FM
//
// – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log('Крок: ' + i);
        document.write('<p>Крок: ' + i + '</p>');
    }
}

// #reLkOkTB29Q
//
// створити масив книжок (назва, кількість сторінок, автори , жанри).
//
// – знайти найбільшу книжку.
//
// – знайти книжку/ки з найбільшою кількістю жанрів
//
// – знайти книжку/ки з найдовшою назвою
//
// – знайти книжку/ки, які писали 2 автори
//
// – знайти книжку/ки, які писав 1 автор
//
//
//
// 1. Створити пустий масив та :
//
//     a. заповнити його 50 парними числами за допомоги циклу.
//
//     b. заповнити його 50 непарними числами за допомоги циклу.
//
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
//
// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
//
// 2. Вивести за допомогою console.log кожен третій елемент
//
// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
//
// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
//
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
//
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//
// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.
//
//
//
//
//
//
//
// – Дано 2 масиви з рівною кількістю об’єктів.
//
//     Масиви:
//
// let usersWithId = [
//
//     {id: 1, name: ‘vasya’, age: 31, status: false},
//
// {id: 2, name: ‘petya’, age: 30, status: true},
//
// {id: 3, name: ‘kolya’, age: 29, status: true},
//
// {id: 4, name: ‘olya’, age: 28, status: false}
//
// ];
//
//
//
// let citiesWithId = [
//
//     {user_id: 3, country: ‘USA’, city: ‘Portland’},
//
// {user_id: 1, country: ‘Ukraine’, city: ‘Ternopil’},
//
// {user_id: 2, country: ‘Poland’, city: ‘Krakow’},
//
// {user_id: 4, country: ‘USA’, city: ‘Miami’}
//
// ];
//
//
//
// З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
//
// Записати цей об’єкт в новий масив
//
// Example:
//
//     let usersWithCities = [
//
//         {
//
//             id: 1, // <===
//
//             name: ‘vasya’,
//
// age: 31,
//
//     status: false,
//
//     address: {
//
//     user_id: 1, // <===
//
//         country: ‘Ukraine’,
//
//     city: ‘Ternopil’
//
// }
//
// },
//
// // TO BE CONTINUED …..
//
// ]
//
//
//
//
//
//
//
//
//
// – Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
//
//
// – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
//
//
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.