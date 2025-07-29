// document.write(
//     `
//     <div>
//     <h2>juice 123</h2>
//     <p>lorem ipsum 1</p>
//     </div>
//     `
// )
// document.write(
//     `
//     <div>
//     <h2>milk 42</h2>
//     <p>lorem ipsum 1</p>
//     </div>
//     `
// )
// document.write(
//     `
//     <div>
//     <h2>tea 123</h2>
//     <p>lorem ipsum 3</p>
//     </div>
//     `
// )

function writer(productTitle, prise, descr){
    document.write(
        `
    <div>
    <h2>${productTitle} ${prise}</h2>
    <p>${descr}</p> 
    </div>
    `
    )
}
writer('milk', 32, 'some milk');
writer('meet', 34, 'some meet');