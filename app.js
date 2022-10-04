
fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(data => {

    let carts ='';

    data.forEach(cart => {
        carts += `
        <div class=" card col-lg-4 mt-5 mb-3">
             <img class="w-100 card-img-top img-fluid" src=${cart.image} alt="Card image cap">
             <div class="card-body w-100">
                 <h5 class="card-title">${cart.price}</h5>
                 <p class="w-100 card-text">${cart.title}</p>
                 <a href="#" class="btn btn-primary">Add To Basket</a>
             </div>
         </div>
        `
    });
    document.getElementById('box').innerHTML = carts
})
.catch(error => console.log(error))