let foobar5 = (arrayPrimitive) => {
    document.write('<ul>');
    for (const item of arrayPrimitive) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}
foobar5(['octen', 30, 40, 50]);