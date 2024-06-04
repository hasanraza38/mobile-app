

let cartItems=JSON.parse(localStorage.getItem('cartItems'))

const totalAmount = document.getElementById('total-amount')
const cart = document.getElementById('cart-pdiv')

function renderCart(){
  let total =0;
  if(cartItems != null && cartItems.length > 0){

    for (let i = 0; i < cartItems.length; i++) {
      // console.log(cartItems[i]);
      total += cartItems[i].price * cartItems[i].quantity;

        cart.innerHTML +=`
        <div id="cart-cdiv">

        <h2>${cartItems[i].brand} ${cartItems[i].model}</h2>

        
        
        <h2>
        <button class="btn btn-primary" onclick="addQuantity(${i})">+</button>
        
        ${cartItems[i].quantity}

        
        <button class="btn btn-primary" onclick="lessQuantity(${i})">-</button>
        </h2>

        <h2>${cartItems[i].price  * cartItems[i].quantity}</h2>
        
         
      <button onclick="deleteItem(${i})" type="button" class=" btn btn-danger">Remove</button>
</div>`
    }
    totalAmount.innerHTML=`
    <h1>Total Amount :${total}</h1>
    `
  }
  else{
    cart.innerHTML=`<div id="cart-emt">
    <h1>The Cart Is Emty!!</h1>

  </div>`
    
  }

  }


  
  let render = renderCart();








function addQuantity(i) 
{

  cart.innerHTML=''
  cartItems[i].quantity +=1

  renderCart()
  // console.log();
}

function lessQuantity(i)
{
  cart.innerHTML = ''

  if(cartItems[i].quantity <= 1){
      cartItems.splice(i , 1);
      renderCart()

  }
  else{


    cartItems[i].quantity -=1
    renderCart()

  }


  //  rendercart()

}





function deleteItem(i){
    cart.innerHTML = ''
    cartItems.splice(i , 1);
    totalAmount.innerHTML = ''
  
    renderCart()

}


