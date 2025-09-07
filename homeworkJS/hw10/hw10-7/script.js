function addToLocalStorage(arrayName,objToAdd) {
    const lsITEM = localStorage.getItem(arrayName);
    if (localStorage.getItem(arrayName)) {
        throw new Error('Storage already exists!');
    }

    const array = JSON.parse(lsItem);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage(localStorage);