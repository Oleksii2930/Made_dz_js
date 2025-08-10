// let coursesAndDurationArray = [
// {title: `JavaScript Complex`, monthDuration: 5},
// {title: 'Java Complex', monthDuration: 6},
// {title: 'Python Complex', monthDuration: 6},
// {title: 'QA Complex', monthDuration: 4},
// {title: 'FullStack', monthDuration: 7},
// {title: 'Frontend', monthDuration: 4}
// ];
//
// console.log(coursesAndDurationArray.map((course, index) => ({...course, id: index +1})));

function cloner(obj) {
    if(obj) {
        let functions = [];
        for(const key in obj) {
            if(typeof obj[key] === 'function') {
                const functionClone = obg[key].bind({});
                functions.push({functionClone, key});
            }
        }
        const cloneObg = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            cloneObg[func.key] = func.functionClone;
        }
        console.log(cloneObg);
        return cloneObg
    }
    throw new Error('Object not found');
}
const clone = cloner({id: 123, name: 'John', greeting() {console.log('hello world!')}, foo() {console.log('bar')}});
clone.foo();