

let cart = JSON.parse(localStorage.getItem('cart')) || []
const DOMcart = document.querySelector('.main-cart');
console.info(cart)

// function noRepit(){
    

// }


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

const  clearItem = () =>{
    localStorage.clear("cart");
    console.info("has borrado un elemento del local storage")
    location.reload();
}

// function carritoTotal(){
//     let Total = 0;
//     const itemCartTotal = document.querySelector('.itemCartTotal')
//     carrito.forEach((item) => {
//       const precio = Number(`${item.price}`.replace("$", ''))
//       Total = Total + precio*item.cantidad
//       console.info(Total)
//     })
// }

printCart()
// carritoTotal()


