// #dFeorS3m7u
//
// – Знайти та вивести довжину наступних стрінгових значень
//
//  ‘hello world’
//
// ‘lorem ipsum’
//
// ‘javascript is cool’

let a = 'hello world';
let b = 'lorem ipsum';
let c = 'javascript is cool';

console.log(a.length);
console.log(b.length);
console.log(c.length);

const strings = [a, b, c];
for (const s of strings) {
    console.log(s.length);
    console.log(s.toUpperCase());

}