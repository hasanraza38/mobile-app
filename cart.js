let cartItems=JSON.parse(localStorage.getItem('cartItems'))

const cart = document.getElementById('cart')

function renderCart(){
    for (let i = 0; i < cartItems.length; i++) {

        cart.innerHTML +=`
        <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${cartItems[i].brand} ${cartItems[i].model}</h5>
                  <h6 class="card-title">${cartItems[i].price}</h6>
    
                  <p class="card-text">storage</p>
                 
                  <div>
    
                  <p class="card-text">${cartItems[i].rom}-${cartItems[i].ram}</p>
                  
                  </div>
                  

                </div>
              </div>`
    }
}

renderCart()