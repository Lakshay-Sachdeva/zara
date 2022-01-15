
  let images = [
    "./images/products/product_2/3918309806_1_1_1.webp",
    "./images/products/product_2/3918309806_6_1_1.webp",
    "./images/products/product_2/3918309806_6_2_1.webp",
    "./images/products/product_2/3918309806_6_3_1.webp",
  ];

  let images_div = document.getElementById("images");

  images.forEach((el) => {
    let pic = document.createElement("img");
    pic.src = el;

    images_div.append(pic);
  });

  let addToCart = document.getElementById("add_cart");
  addToCart.onclick = () => {
    alert("Added to Cart");
    let item = {
      name: "PADDED PARKA WITH HOOD",
      price: 8999,
      image: images[0],
      size: document.getElementById("size").value,
    };

    item = JSON.stringify(item);
    let x = JSON.parse(localStorage.getItem("cart"));
    x.push(item);
    console.log(x);
    x = JSON.stringify(x);
    localStorage.setItem("cart", x);
  };