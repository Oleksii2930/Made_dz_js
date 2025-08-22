// const cartsDiv = document.getElementById('carts');
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(cartsObject => {
        const { carts } = cartsObject;
        console.log(carts);
        // for (const cart of carts) {
        //     const div = document.createElement('div');
        //     div.classList.add('carts-container');
        //     const divWithInfo = document.createElement('div');
        //     divWithInfo.innerHTML = `
        //     'total': ${cart.total},
        //     'discountedTotal': ${cart.discountedTotal},
        //     'userId': ${cart.userId},
        //     'totalProducts':${cart.totalProducts},
        //     'totalQuantity':${cart.totalQuantity}
        //     `
        //
        //     const ol = document.createElement('ol');
        //     for (const product of cart.products) {
        //         const li = document.createElement('li');
        //         li.innerHTML = `
        //         "discountPercentage": ${product.discountPercentage},
        //     "discountedTotal": ${product.discountedTotal},
        //     "id": ${product.id},
        //     "price": ${product.price},
        //     "quantity": ${product.quantity},
        //     "thumbnail": ${product.thumbnail},
        //     "title": ${product.title},
        //     "total": ${product.total}
        //         `
        //         ol.appendChild(li);
        //     }
        //     div.append(divWithInfo, ol);
        //     cartsDiv.appendChild(divWithInfo);
        // }
    })