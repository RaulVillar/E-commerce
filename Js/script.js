const divisa = '€';
const DOMnew = document.querySelector('#new');
const DOMproducts = document.querySelector('#products');
const DOMexclusive = document.querySelector('#exclusive');


//DOMtotalItemindex = document.querySelectorAll('.totalItem')





function renderNew() {

    var news = products.filter(item => item.category == "New");
    news.forEach((item) => { printNew(item) });

}

function renderProducts() {

    var product = products.filter(item => item.category == "Products");
    product.forEach((item) => { printProduct(item) });

}

function renderExclusive() {

    var exclusive = products.filter(item => item.category == "Exclusive");
    exclusive.forEach((item) => { printExclusive(item) });

}


function printNew(item) {

    const myProduct = document.createElement("div");
    myProduct.id = "box";
    document.body.appendChild(myProduct);

    const myProductTitle = document.createElement('h2');
    myProductTitle.innerText = item.name;
    myProductTitle.id = 'product-title';

    const myProductImage = document.createElement("img");
    myProductImage.src = item.image;
    myProductImage.id = 'product-image';

    const myProductDescription = document.createElement('p');
    myProductDescription.innerText = item.description;
    myProductDescription.id = 'product-description';

    const myProductPrice = document.createElement("p");
    myProductPrice.innerText = item.price + divisa;
    myProductPrice.id = 'product-price';

    const myProductButton = document.createElement("button");
    myProductButton.innerHTML = "Shop"
    myProductButton.id = 'product-button';
    myProductButton.setAttribute('marker', item.id);
    myProductButton.addEventListener('click', shoppingButton);


    myProduct.appendChild(myProductTitle);
    myProduct.appendChild(myProductImage);
    myProduct.appendChild(myProductDescription);
    myProduct.appendChild(myProductPrice);
    myProduct.appendChild(myProductButton);
    DOMnew.appendChild(myProduct);

}

function printProduct(item) {

    const myProduct = document.createElement("div");
    myProduct.id = "box";
    document.body.appendChild(myProduct);

    const myProductTitle = document.createElement('h2');
    myProductTitle.innerText = item.name;
    myProductTitle.id = 'product-title';

    const myProductImage = document.createElement("img");
    myProductImage.src = item.image;
    myProductImage.id = 'product-image';

    const myProductDescription = document.createElement('p');
    myProductDescription.innerText = item.description;
    myProductDescription.id = 'product-description';

    const myProductPrice = document.createElement("p");
    myProductPrice.innerText = item.price + divisa;
    myProductPrice.id = 'product-price';

    const myProductButton = document.createElement("button");
    myProductButton.innerHTML = "Shop"
    myProductButton.id = 'product-button';
    myProductButton.setAttribute('marker', item.id);
    myProductButton.addEventListener('click', shoppingButton);


    myProduct.appendChild(myProductTitle);
    myProduct.appendChild(myProductImage);
    myProduct.appendChild(myProductDescription);
    myProduct.appendChild(myProductPrice);
    myProduct.appendChild(myProductButton);
    DOMproducts.appendChild(myProduct);
}


function printExclusive(item) {

    const myProduct = document.createElement("div");
    myProduct.id = "box";
    document.body.appendChild(myProduct);

    const myProductTitle = document.createElement('h2');
    myProductTitle.innerText = item.name;
    myProductTitle.id = 'product-title';

    const myProductImage = document.createElement("img");
    myProductImage.src = item.image;
    myProductImage.id = 'product-image';

    const myProductDescription = document.createElement('p');
    myProductDescription.innerText = item.description;
    myProductDescription.id = 'product-description';

    const myProductPrice = document.createElement("p");
    myProductPrice.innerText = item.price + divisa;
    myProductPrice.id = 'product-price';

    const myProductButton = document.createElement("button");
    myProductButton.innerHTML = "Shop"
    myProductButton.id = 'product-button';
    myProductButton.setAttribute('marker', item.id);
    myProductButton.addEventListener('click', shoppingButton);


    myProduct.appendChild(myProductTitle);
    myProduct.appendChild(myProductImage);
    myProduct.appendChild(myProductDescription);
    myProduct.appendChild(myProductPrice);
    myProduct.appendChild(myProductButton);
    DOMexclusive.appendChild(myProduct);
}

function shoppingButton(event) {

    let des = event.target.getAttribute('marker')
    let storage = products[des];
    const exist = cart.some(product => product.id === storage.id);
    if (exist) {
        const pro = cart.map(product => {
            if (product.id === storage.id) {
                product.quantity++;
                return product;
            } else {
                return product
            }
        });
        cart = [...pro]
    } else {
        cart.push(storage)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    
    console.info(cart)
    totalItem2()
}


//DOMtotalItemindex.innerHTML += totalItem;

renderNew()
renderProducts()
renderExclusive()
//totalItem2 ()



