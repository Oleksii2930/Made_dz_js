function foobar (arrayPrimitive) {
    document.write('<ul>');
    for (const item of arrayPrimitive) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}
foobar(['octen', 30, 40, 50]);