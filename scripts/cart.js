let cart = JSON.parse(localStorage.getItem("cart"));
let totalPrice = 0;
console.log(cart);
cart.forEach((el) => {
  el = JSON.parse(el);
  console.log(el);
  let p_div = document.getElementById("products");
  let p_img = document.createElement("img");
  p_img.src = el.image;
  let p_details = document.createElement("div");
  p_details.className = "";
  let p_name = document.createElement("h2");
  p_name.innerText = el.name;
  let p_price = document.createElement("h3");
  p_price.innerText = `Rs: ${el.price}`;
  totalPrice += el.price;
  let p_size = document.createElement("p");
  p_size.innerText = el.size;

  p_details.append(p_name, p_price, p_size);
  p_div.append(p_img, p_details);
});

let totalItems = document.getElementById("items");
totalItems.innerText = `${cart.length} Items`;

let total = document.getElementById("total");
total.innerText = `Rs: ${totalPrice}`;
