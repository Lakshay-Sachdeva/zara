
let categ = [
    {
        image:"./images/index/man.webp",
        name:"Man",
        description:"Introducing the Fall/Winter 2021 Collection"
    },
    {
        image:"./images/index/woman.jpg",
        name:"Woman",
        description:"Introducing the Fall/Winter 2021 Collection"
    },
    {
        image:"./images/index/kids.jpg",
        name:"Kids",
        description:"Introducing the Fall/Winter 2021 Collection"
    }
]

let parent_div = document.getElementById("categories") ;

categ.forEach(el=>{

    let category_div = document.createElement("div") ;
    category_div.onclick = () =>{
        window.location = "./products.html" ;
    }

    let image = document.createElement("img") ;
    image.src = el.image

    let caption = document.createElement("p") ;
    caption.innerText = el.description


    category_div.append(image , caption) ;

    parent_div.append(category_div) ;
}) ;

