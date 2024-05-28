let cartItems=JSON.parse(localStorage.getItem('cartItems'))

// const cart = document.getElementById('cart')
const cart = document.getElementById('cart-pdiv')

function renderCart(){
  if(cartItems != null && cartItems.length> 0){

    for (let i = 0; i < cartItems.length; i++) {

        cart.innerHTML +=`
        <div id="cart-cdiv">

        <h2>${cartItems[i].brand} ${cartItems[i].model}</h2>

        <h2>${cartItems[i].price * cartItems[i].quantity}</h2>


        <h2>Quantity:
        <button class="btn btn-primary" onclick="addQuantity(${i})">+</button>
        ${cartItems[i].quantity}
        <button class="btn btn-primary" onclick="lessQuantity(${i})">-</button>
        </h2>

        <h2>1</h2> 
      <button type="button" class=" btn btn-danger">Remove</button>





    </div>`
    }
  }

  }











function addQuantity(i) 
{

  cart.innerHTML=''
  cartItems[i].quantity +=1

  renderCart()
  console.log();
}

function lessQuantity(i)
{
  div.innerHTML = ''

  if(cartItems[i].quantity <= 1){
      cartItems.splice(i , 1);

  }
  else{
      cartItems[i].quantity -= 1
  }


  renderItems()

}





function deleteItem(i){
    div.innerHTML = ''
    cartItems.splice(i , 1);
    totalAmount.innerHTML = ''
    renderItems()
}



renderCart()