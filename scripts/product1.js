let images = ["./images/products/product_1/0706359704_1_1_1.webp" , "./images/products/product_1/0706359704_6_1_1.webp" , "./images/products/product_1/0706359704_6_2_1.webp" , "./images/products/product_1/0706359704_6_3_1.jpg" , "images/products/product_1/sustainability-extrainfo-label-1365_0.webp"] ;

    let images_div = document.getElementById("images") ;

    images.forEach(el=>{
        let pic = document.createElement('img') ;
        pic.src = el ;

        images_div.append(pic) 
    })

    let addToCart = document.getElementById("add_cart")
    addToCart.onclick = ()=>{
        let item = {
            name : "WOOL BLEND JACKET WITH POCKETS" , 
            price :7999,
            image: images[0],
            size : document.getElementById("size").value
        }
        
        item = JSON.stringify(item)
        localStorage.getItem('cart');
        localStorage.setItem('cart', item) ;
    }