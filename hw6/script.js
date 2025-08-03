// // #dFeorS3m7u
// //
// // – Знайти та вивести довжину наступних стрінгових значень
// //
// //  ‘hello world’
// //
// // ‘lorem ipsum’
// //
// // ‘javascript is cool’
//
// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
//
// console.log(a.length);
// console.log(b.length);
// console.log(c.length);
//
// const strings = [a, b, c];
// for (const s of strings) {
//     console.log(s.length);
//     console.log(s.toUpperCase());
//
// }
//
// // – Перевести до великого регістру наступні стрінгові значення
// //
// //       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
//
// console.log(a.toUpperCase());

// let a = 'HELLO WORLD';
// let b = 'LOREM IPSUM';
// let c = 'JAVASCRIPT IS COOL';
// const strings = [a, b, c];
// for (const s of strings) {
// console.log(s.toLowerCase());
// }
//
// // – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
// let str = '  dirty string   '
// console.log(str.trim());

// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
//     let str = ‘Ревуть воли як ясла повні’;
//
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]

// function stringToArray(str) {
//     if (str) {
//         const split = str.split(' ');
//         return split;
//     }
//     return [''];
//
// }
// console.log(stringToArray('Ревуть воли як ясла повні'))

// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
//     за допомоги map  перетворити всі об’єкти в масиві на стрінгові.

// let arrNum = [10,8,-7,55,987,-1011,0,1050,0];
// arrNum.map((number) => {
//     return number + '';
// })
// console.log(arrNum)

// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
//     let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]
function sortNums(nums, direction) {
    if (direction === 'ascending') return nums.sort((a, b) => a - b);
    if (direction === 'descending') return nums.sort((a, b) => b - a);
}
console.log(sortNums([11, 21, 3], 'ascending'));
console.log(sortNums([11, 21, 3], 'descending'));

// – є масив
//
// let coursesAndDurationArray = [
//
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//
// {title: ‘Java Complex’, monthDuration: 6},
//
// {title: ‘Python Complex’, monthDuration: 6},
//
// {title: ‘QA Complex’, monthDuration: 4},
//
// {title: ‘FullStack’, monthDuration: 7},
//
// {title: ‘Frontend’, monthDuration: 4}
//
// ];
//
//  — відсортувати його за спаданням за monthDuration
//
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// const coursesAndDurationArray = [
//
//     {title: 'JavaScript Complex', monthDuration: 5},
//
// {title: 'Java Complex', monthDuration: 6},
//
// {title: 'Python Complex', monthDuration: 6},
//
// {title: 'QA Complex', monthDuration: 4},
//
// {title: 'FullStack', monthDuration: 7},
//
// {title: 'Frontend', monthDuration: 4}
//
// ];
// const map1 = coursesAndDurationArray
//     .sort((a, b) => a.monthDuration - b.monthDuration)
//     .filter(value => value.monthDuration > 5)
//     .map((value,index) => {
//    value.id = index + 1;
//    return value;
// })
// console.log(map1);


// взяти з arrays.js масив coursesArray
//
// –написати пошук всіх об’єктів, в яких в modules є sass
//
// –написати пошук всіх об’єктів, в яких в modules є docker

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// console.log(coursesArray.filter(course => {
//     return course.modules.includes('sass');
// }));
// console.log(coursesArray.filter(course => {
//     return course.modules.includes('docker');
// }));



// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивів:
//
//     – знайти піковий туз
//
//  – всі шістки
//
//  – всі червоні карти
//
//  – всі буби
//
//  – всі трефи від 9 та більше
//
//
//
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }

const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const colors = {
    spade: 'black',
    clubs: 'black',
    diamond: 'red',
    heart: 'red'
};

let deck = [];

for (let suit of suits) {
    for (let value of values) {
        deck.push({
            cardSuit: suit,
            value: value,
            color: colors[suit]
        });
    }
}
// let spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
// console.log('Spade Ace:', spadeAce);
// let sixes = deck.filter(card => card.value === '6');
// console.log('All sixes:', sixes);
// let diamonds = deck.filter(card => card.cardSuit === 'diamond');
// console.log('Diamonds:', diamonds);
// let highClubs = deck.filter(card =>
//     card.cardSuit === 'clubs' &&
//     ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)
// );
// console.log('Clubs 9 and higher:', highClubs);


const groupedBySuit = deck.reduce((acc, card) => {
    acc[card.cardSuit].push(card);
    return acc;
}, {
    spade: [],
    diamond: [],
    heart: [],
    clubs: []
});

console.log(groupedBySuit);