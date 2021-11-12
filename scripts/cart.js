
    let cart = JSON.parse(localStorage.getItem('cart')) ;
    let p_div = document.getElementById("products");
    let p_img = document.createElement('img');
    p_img.src = cart.image ;
    let p_details = document.createElement('div')
    let p_name = document.createElement('p');
    p_name.innerText = cart.name ;
    let p_price = document.createElement('p')
    p_price.innerText = `Rs: ${cart.price}` ;
    let p_size = document.createElement('p') ;
    p_size.innerText = cart.size ;

    p_details.append(p_name , p_price , p_size) ;
    p_div.append(p_img , p_details) ;


    let total = document.getElementById('total') ;
    total.innerText = `Rs: ${cart.price}` ;