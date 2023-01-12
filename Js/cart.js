let cart = JSON.parse(localStorage.getItem('cart')) || []
const DOMcart = document.querySelector('.main-cart');

const DOMbuttonDeleteCart = document.querySelector('.deleteCart');

DOMbuttonDeleteCart.addEventListener('click', clearCart)



function printCart(){
    DOMcart.innerHTML = ''
    cart.forEach((item) => {
            
            let print = document.createElement('div'); 
            print.innerHTML = `
            <div class="itemCart" style="height: 15vh;">
                <img src="${item.image}">
                <div>
                    <h5>${item.name}</h5>
                    <button onclick=deleteitem(${item.id})>borrar</button>
                </div>
                <div>
                    <button>-</button>
                    <p>cantidad</p>
                    <button>+</button>
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
}
printCart()

function clearCart () {
    localStorage.clear()
    cart = JSON.parse(localStorage.getItem('cart'))
    printCart()
}