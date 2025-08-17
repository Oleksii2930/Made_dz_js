// // – створити блок,
// //
// let div = document.createElement('div');
// // – додати йому класи wrap, collapse, alpha, beta
// //
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
//
// // – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// //
//
// // – додати цей блок в body.
// //
// // document.body.appendChild(div);
// const cloneNode = div.cloneNode(true);
// // – клонувати його повністю, та додати клон в body.
// //
//  document.body.append(div, cloneNode);

// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// let arr = ['Main','Products','About us','Contacts'];
//
// const menu = document.createElement('ul')
// menu.classList.add('menu');
//
// for (const item of arr) {
// const li = document.createElement('li');
// li.innerText = item;
// menu.appendChild(li);
// }
// document.body.appendChild(menu);

// // – Є масив
//
// let coursesAndDurationArray = [
//
//  {title: 'JavaScript Complex', monthDuration: 5},
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
//
// // Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
// //
// // Завдання робити через цикли.
// for (const course of coursesAndDurationArray) {
//  const div = document.createElement('div');
//  div.innerText = `${course.title} - ${course.monthDuration}`;
//  document.body.appendChild(div);
// }

// – Є масив

// let coursesAndDurationArray = [
//
//  {title: 'JavaScript Complex', monthDuration: 5},
//
//  {title: 'Java Complex', monthDuration: 6},
//
//  {title: 'Python Complex', monthDuration: 6},
//
//  {title: 'QA Complex', monthDuration: 4},
//
//  {title: 'FullStack', monthDuration: 7},
//
//  {title: 'Frontend', monthDuration: 4}
//
// ];
//
//
//
// // За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
// //
// //     Завдання робити через цикли.
// for (const course of coursesAndDurationArray) {
// const div = document.createElement('div');
// const h2 = document.createElement('h2');
// h2.innerText = course.title;
// const p = document.createElement('p');
// p.innerText = course.monthDuration;
// div.append(h2, p);
//
// document.body.appendChild(div);
// }


let coursesArray = [
 {
  title: 'JavaScript Complex',
  monthDuration: 5,
  hourDuration: 909,
  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
 },
 {
  title: 'Java Complex',
  monthDuration: 6,
  hourDuration: 909,
  modules: ['html',
   'css',
   'js',
   'mysql',
   'mongodb',
   'angular',
   'aws',
   'docker',
   'git',
   'java core',
   'java advanced']
 },
 {
  title: 'Python Complex',
  monthDuration: 6,
  hourDuration: 909,
  modules: ['html',
   'css',
   'js',
   'mysql',
   'mongodb',
   'angular',
   'aws',
   'docker',
   'python core',
   'python advanced']
 },
 {
  title: 'QA Complex',
  monthDuration: 4,
  hourDuration: 909,
  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
 },
 {
  title: 'FullStack',
  monthDuration: 7,
  hourDuration: 909,
  modules: ['html',
   'css',
   'js',
   'mysql',
   'mongodb',
   'react',
   'angular',
   'aws',
   'docker',
   'git',
   'node.js',
   'python',
   'java']
 },
 {
  title: 'Frontend',
  monthDuration: 4,
  hourDuration: 909,
  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
 }
];
for (const course of coursesArray) {
 const div = document.createElement('div'); // головний дів
//блок заголовка
const div2 = document.createElement('div');
 const h2 = document.createElement('h2');
 h2.innerText = course.title;
 div2.appendChild(h2);
//блок з тривалістю
 const div3 = document.createElement('div');
 div3.classList.add('durations'); // додав клас
 const div31 = document.createElement('div');
div31.innerText = course.monthDuration;
 document.body.appendChild(div31);
 const div32 = document.createElement('div');
div32.innerText = course.hourDuration;
 div3.append(div31, div32);

//
 const div4 = document.createElement('div');
const menu = document.createElement('ul')
menu.classList.add('menu');

for (const item of course.modules) {
const li = document.createElement('li');
li.innerText = item;
menu.appendChild(li);
}
div4.appendChild(menu);

 div.append(div2, div3, div4);
 document.body.appendChild(div);
}