let cart = [
    {
        id: 1,
        name: "Refresco de Sailor Moon",
        price: 1.50,
        description: "Un producto la mar de refrescante, sabor a pomelo y con la grandiosa Sailor Moon como protagonista.",
        image: 'imagenes/prd-agua-soda-sabor-pomelo-edicion-sailor-moon-japonshop_2.webp',
        category: "New",
        quantity: 0
    },
    {
        id: 2,
        name: "Bebida de cafe Asahi Wonda Premium",
        price: 1.50,
        description: "El cafe de la marca Asahi, fabricado por japoneses y para japoneses, es un producto exclusivo.",
        image: 'imagenes/prd-bebida-cafe-asahi-wonda-gold-premium-1-japonshop_2.webp',
        category: "New",
        quantity: 0
    },
]
cart.forEach((item) => {
    let print = document.createElement('div');
    print.innerHTML = `
    <div class="itemCart" style="height: 15vh;">
        <img src="${item.image}">
        <div>
            <h5>${item.name}</h5>
            <button data-id = "${item.id}" id= "borrar">borrar</button>
        </div>
        <div>
            <button onclick = restItem()> - </button>
            <p>cantidad</p>
            <button onclick = sumItem()> + </button>
        </div>
        <div>
            <p>${item.price}€</p>
        </div>
        <div>
            <p>total €</p>
        </div>
    </div>
    `;

DOMcart.append(print);
})
const sumItem = () =>{
let item = document.getElementsByClassName("itemCart").value;
localStorage.setItem("product",item)
console.info("añades un elemento al local storage")
}  

const restItem = () =>{
let item = document.getElementsByClassName("itemCart").value;
localStorage.setItem("product",item)
console.info("sacas un elemento del local storage")
}  