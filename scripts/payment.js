let user_address = {
    address_line_1 : document.getElementById("address_line_1").value,
    address_line_2 : document.getElementById("address_line_2").value,
    city: document.getElementById("city").value ,
    state : document.getElementById("state").value ,
    pin : document.getElementById("pin").value,
    c_no : document.getElementById("contact").value ,
}

let parent = document.getElementById("btn") ;
let proceed_btn = document.createElement("button");
parent.append(proceed_btn);

let card_form = document.createElement("div") ;
let card_name = document.createElement("input") ;
card_name.type = "text" ;
card_name.placeholder = "Card Holder's Name" ;
let card_number = document.createElement("input") ;
card_number.type = "number" ;
card_number.placeholder = "Card Number"
let card_cvv = document.createElement("input") ;
card_cvv.type = "number" ;
card_cvv.placeholder = "CVV"

card_form.append(card_number , card_name , card_cvv) ;

let check_out = document.createElement("button") ;
check_out.innerText = "Make Payment" ;
check_out.onclick = ()=>{
    setTimeout(()=>{
        alert("Order Placed Succesfully");
        window.location = "./index.html";
        localStorage.clear();
    },2000)
}

proceed_btn.innerText = "PROCEED" ;
proceed_btn.onclick = ()=>{
    let method = document.getElementById("method").value ;
    if(method == "card"){
        // console.log("CARD");
        parent.innerHTML = null ;
        parent.append(card_form , check_out)
    }
    else if(method == "cash"){
        // console.log("CASH");
        parent.innerHTML = null
        parent.append(check_out)
    }
}
