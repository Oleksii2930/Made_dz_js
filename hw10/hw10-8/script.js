const tableGeneratorForm = document.getElementById('tableGeneratorForm');
const table = document.getElementById('table');

tableGeneratorForm.onsubmit = function (e) {
    e.preventDefault();
    const linesValue = +tableGeneratorForm.lines.value;
    const cellsValue = +tableGeneratorForm.cells.value;
    const dataValue = tableGeneratorForm.data.value;
    console.log(linesValue, cellsValue, dataValue );

    for (let i = 0; i < linesValue; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            const td = document.createElement('td');
            td.innerText = dataValue;
            tr.appendChild(td);

        }
table.appendChild(tr);
    }
}