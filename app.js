
const phones = [
    {
        brand: 'Samsung',
        model: 'Galaxy S20',
        ram: 8,
        rom: 128,
        camera: '64MP Triple Camera',
        price: 'PKR 154,999'
    },
    {
        brand: 'Xiaomi',
        model: 'Redmi Note 10',
        ram: 4,
        rom: 128,
        camera: '48MP Quad Camera',
        price: 'PKR 31,999'
    },
    {
        brand: 'Infinix',
        model: 'Infinix Zero 8',
        ram: 8,
        rom: 128,
        camera: '64MP Quad Camera',
        price: 'PKR 35,999'
    },
    {
        brand: 'Tecno',
        model: 'Tecno Camon 16 Premier',
        ram: 8,
        rom: 128,
        camera: '64MP Quad Camera',
        price: 'PKR 39,999'
    },
    {
        brand: 'Apple',
        model: 'iPhone 13',
        ram: 6,
        rom: 128,
        camera: '12MP Dual Camera',
        price: 'PKR 194,999'
    },
    {
        brand: 'Oppo',
        model: 'Oppo F19 Pro',
        ram: 8,
        rom: 256,
        camera: '48MP Quad Camera',
        price: 'PKR 49,999'
    },
    {
        brand: 'Vivo',
        model: 'Vivo Y51',
        ram: 8,
        rom: 128,
        camera: '48MP Triple Camera',
        price: 'PKR 39,999'
    },
    {
        brand: 'Samsung',
        model: 'Galaxy S21 Ultra',
        ram: 12,
        rom: 256,
        camera: '108MP Quad Camera',
        price: 'PKR 229,999'
    },

    {
        brand: 'Tecno',
        model: 'Pova Neo 3',
        ram: 8,
        rom: 128,
        camera: '108MP Quad Camera',
        price: 'PKR 54,999'
    }
];

let arr=[];

let items=JSON.parse(localStorage.getItem('cartItems'))

// if(items === null){
//     arr=[]
// }
// else{
//     arr=items
// }

const div = document.querySelector('#div')

function renderItems() {
    for (let i = 0; i < phones.length; i++) {

        // console.log(phones[i]);
    
        div.innerHTML +=`
                     
  <div class="card" style="width: 18rem;">
  <img id="cardimg" src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?cs=srgb&dl=pexels-lastly-699122.jpg&fm=jpg" class="card-img-top" alt="card-image">
  <div class="card-body">
  <h5 class="card-title"><b>${phones[i].brand} ${phones[i].model}</b></h5>
  <h6 class="card-title">${phones[i].price}</h6>
  <h6 class="card-text">${phones[i].rom}/${phones[i].ram}</h6>
  

  
  <button id="cbtn" onclick='addToCart(${i})' type="button" class="btn btn-primary">Add to cart</button>
  </div>
</div>
              
              `
        
    
        
    }
    
    
}



function addToCart(index) {
    localStorage.setItem('cartItems' , JSON.stringify(arr))
    
if(arr.includes(phones[index])){
    console.log('item included');

    phones[index].quantity += 1;
}else{
    phones[index].quantity = 1;
    arr.push(phones[index]);
    }
    console.log(arr);
    }``
    
    
    
    function goToCart() {
        window.location='cart.html'   
        console.log('goto cart'); 
        }


        
    renderItems()