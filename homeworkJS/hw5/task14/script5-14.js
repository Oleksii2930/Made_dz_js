let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return sumUAH / currencyValues[i].value;
        }
    }
}
console.log(exchange(10000,[
    {currency:'USD',value:'42'},
    {currency:'EUR',value:'49'}
], 'USD'));