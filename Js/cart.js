let DOMcart = document.querySelector('.main-cart');

cart = JSON.parse(localStorage.getItem("cart")) || [];
console.info(cart)







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

// var botonBorrar = document.getElementById ("borrar")
// console.info(botonBorrar)

// let Cart = JSON.parse(localStorage.getItem("Cart")) || []

// const saveitem = () =>{
//     let item =document.getElementById("item").value;
//     localStorage.setItem("Product",item)
//     console.info ("has creado un item en el local storage")
// }
// function AddtoCart(newItem) {
// DOMbuttonAdd.addEventListener("click", saveitem())   
// }