const products = [
    {
        id: 1,
        name: "Refresco de Sailor Moon",
        price: 1.50,
        description: "Un producto la mar de refrescante, sabor a pomelo y con la grandiosa Sailor Moon como protagonista",
        image: 'imagenes/prd-agua-soda-sabor-pomelo-edicion-sailor-moon-japonshop_2.webp',
        category: "New"
    },
    {
        id: 2,
        name: "Bebida de café Asahi Wonda Premium",
        price: 1.50,
        description: "El café de la marca Asahi, fabricado por japoneses y para japoneses, es un producto exclusivo que acompaña a estudiantes y oficinistas en sus largas jornadas de exhaustivo trabajo.",
        image: 'imagenes/prd-bebida-cafe-asahi-wonda-gold-premium-1-japonshop_2.webp',
        category: "New"

    },
    {
        id: 3,
        name: "Bombones de melocotón, frambuesa y chocolate",
        price: 3,
        description: "Una explosión de sabor inigualable, un producto exquisito fabricado por los más expertos chocolateros nipones. Pruébalo",
        image: 'imagenes/prd-bombones-petit-melo-chocolate-frambuesa-japonshop.webp',
        category: "New"

    },
    {
        id: 4,
        name: "Chicles de One Piece",
        price: 2.50,
        description: "Chicles sabor melocotón, no te concederán poderes ni te servirán para encontrar el One Piece, pero están riquísimos.",
        image: 'imagenes/prd-chicles-one-piece-japon-japonshop.webp',
        category: "New"

    },
    {
        id: 6,
        name: "Fideos Ramen Naruto",
        price: 2,
        description: "Una bolsita de fideos, sabor a pollo, con los ingredientes preferidos de nuestro amado Naruto.",
        image: 'imagenes/prd-fideos-ramen-naruto-yile-setas-japon-japonshop_1.webp',
        category: "Products"

    },
    {
        id: 7,
        name: "Puzle de Sanrio",
        price: 6,
        description: "El puzle de Sanrio no es comestible, pero es adorable y muy entretenido de montar.",
        image: 'imagenes/prd-diy-puzle-sanrio-friends-japonshop.webp',
        category: "Products"

    },
    {
        id: 8,
        name: "Galleta Pokemon Fresa",
        price: 3,
        description: "Una adorable galletita con un pokemon sorpresa. Hay mas de 20 misteriosos pokemons por comer!",
        image: 'imagenes/prd-galleta-pokemon-fresa-japonshop.webp',
        category: "Products"

    },
    {
        id: 9,
        name: "Ramen de pollo Chikin sabor pizza",
        price: 3,
        description: "Como lo escuchas, un ramen sabor a pizza cuatro quesos procedente de la famosa marca Chikin.",
        image: 'imagenes/prd-ramen-pollo-chikin-pizza-japonshop_1.webp',
        category: "Products"
    },
    {
        id: 10,
        name: "Salsa de curry de Sinchan",
        price: 3.20,
        description: "Esta salsa de curry, con cerdo y maiz, que por suerte no ha cocinado Sinchan, es suave al paladar y muy nutritiva.",
        image: 'imagenes/prd-salsa-curry-japonesa-cerdo-maiz-shin-chan-japonshop_1.webp',
        category: "Exclusive"
    },
    {
        id: 11,
        name: "Salsa de curry de Doraemon",
        price: 3.20,
        description: "Una salsa de curry, con cerdo, verduras y queso, que se ha sacado Doraemon del bolsillo mágico.",
        image: 'imagenes/prd-salsa-curry-japonesa-cerdo-verduras-queso-doraemon-japonshop_1.webp',
        category: "Exclusive"
    },
    {
        id: 12,
        name: "Sopa de maiz de Pokemon",
        price: 1.75,
        description: "Nutritiva sopita de maiz con temática de Pokemon. *No incluye trazas de pokemons",
        image: 'imagenes/prd-sopa-maiz-pokemon-japonesa-japonshop.webp',
        category: "Exclusive"
    },
    {
        id: 13,
        name: "Cebada japonesa limitada Rilakkum",
        price: 5,
        description: "Una imperial cebada nipona, limitada y exclusiva, del osito Rilakkum",
        image: 'imagenes/prd-te-cebada-japones-edicion-limitada-rilakkuma-japonshop.webp',
        category: "Exclusive"
    },
]


const divisa = '€';
const DOMnew = document.querySelector('#new');
const DOMproducts = document.querySelector('#products');
const DOMexclusive = document.querySelector('#exclusive');


function renderNew() {

    var news = products.filter(item => item.category == "New")
    news.forEach((item) => { printNew(item) })

}

function renderProducts() {

    var product = products.filter(item => item.category == "Products")
    product.forEach((item) => { printProduct(item) })

}

function renderExclusive() {

    var exclusive = products.filter(item => item.category == "Exclusive")
    exclusive.forEach((item) => { printExclusive(item) })

}

renderProducts()
renderNew()
renderExclusive()

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

    myProduct.appendChild(myProductTitle);
    myProduct.appendChild(myProductImage);
    myProduct.appendChild(myProductDescription);
    myProduct.appendChild(myProductPrice);
    DOMnew.appendChild(myProduct)
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

    myProduct.appendChild(myProductTitle);
    myProduct.appendChild(myProductImage);
    myProduct.appendChild(myProductDescription);
    myProduct.appendChild(myProductPrice);
    DOMproducts.appendChild(myProduct)
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

    myProduct.appendChild(myProductTitle);
    myProduct.appendChild(myProductImage);
    myProduct.appendChild(myProductDescription);
    myProduct.appendChild(myProductPrice);
    DOMexclusive.appendChild(myProduct);
}



