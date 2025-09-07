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