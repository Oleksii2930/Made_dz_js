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