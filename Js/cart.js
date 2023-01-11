

let cart = JSON.parse(localStorage.getItem('cart')) || []

console.info(cart)


const DOMcart = document.querySelector('.main-cart');

function printCart(){

    cart.forEach((item) => {
            let print = document.createElement('div');
            print.innerHTML = `
            <div class="itemCart" style="height: 15vh;">
                <img src="${item.image}">
                <div>
                    <h5>${item.name}</h5>
                    <button>borrar</button>
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



