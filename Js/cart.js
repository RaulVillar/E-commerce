let cart = JSON.parse(localStorage.getItem('cart')) || []
const DOMcart = document.querySelector('.main-cart');

const DOMbuttonDeleteCart = document.querySelector('.deleteCart');

DOMbuttonDeleteCart.addEventListener('click', clearCart)



function printCart(){
    DOMcart.innerHTML = ''
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
                    <p>total €</p>
                </div>
            </div>
            `;
        
        DOMcart.append(print);
    })
    
}

const  clearItem = () =>{
    localStorage.clear("cart");
    console.info("has borrado un elemento del local storage")
    location.reload();
}

function clearCart () {
    localStorage.clear()
    cart = JSON.parse(localStorage.getItem('cart'))
    printCart()
}
printCart()



}

function totalItem {
    
}





