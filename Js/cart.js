let cart = JSON.parse(localStorage.getItem('cart')) || []
let totalItem = totalItem2();
const DOMcart = document.querySelector('.main-cart');

const DOMbuttonDeleteCart = document.querySelector('.deleteCart');

DOMbuttonDeleteCart.addEventListener('click', clearCart)

const DOMtotalItem = document.querySelectorAll('.totalItem')

//DOMtotalItem.innerHTML += totalItem;

function printCart(){
    DOMcart.innerHTML = ''
    if (cart !== null){
    cart.forEach((item) => {
            
            let print = document.createElement('div'); 
            print.innerHTML = `
            <div class="itemCart" style="height: 10vh;">
                <img src="${item.image}">
                <div>
                    <h5>${item.name}</h5>
                    <button id="delete-button" data-id="${item.id}">borrar</button>
                </div>
                <div>
                    <button>-</button>
                    <p>${item.quantity}</p>
                    <button>+</button>
                </div>
                <div>
                    <p>${item.price}€</p>
                </div>
                <div>
                    <p id="totalProduct">total €</p>
                </div>
            </div>
            `;
        
        DOMcart.append(print);
    })
    }
}

function reloadCart (){
    cart = JSON.parse(localStorage.getItem('cart'))
}

function clearCart () {
    localStorage.clear()
    reloadCart ()
    printCart()
    totalItem2()
    totalCart()
    location.reload()
}
printCart()

const deletebutton = document.querySelectorAll('#delete-button')

deletebutton.forEach (boton => {
    boton.addEventListener("click", deleteProduct)
})

DOMtotalItem.forEach (boton => {
    boton.innerHTML += totalItem2()
})

function deleteProduct(event){

    const productId = event.target.dataset.id; 
    console.info(productId)
    cart = cart.filter(prd => prd.id.toString() !== productId.toString());
    localStorage.setItem('cart',JSON.stringify(cart));
    printCart();
    location.reload()
    totalItem2()
    
}


function totalItem2 (){
    let sumatorio = 0 ;
    
    console.info(sumatorio)
    if (cart !== null){
        cart.forEach (item => {
            sumatorio += item.quantity
        });
    }
    return sumatorio
};


function totalCart() {
    var total = 0;
    if (cart !== null){
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].quantity * cart[i].price;
    }
}
    return total;
}

console.info(totalCart());

const total = document.querySelector('#total');

total.innerHTML += totalCart() + '€';

