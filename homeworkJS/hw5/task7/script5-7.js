let foobar4 = (text, counter) => {
    document.write('<ul>');
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
foobar4(['octen'], 30);