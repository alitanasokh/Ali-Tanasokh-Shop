let cart = [];


function addToCart(product){

    cart.push(product);

    alert(product + " به سبد خرید اضافه شد");

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}



function showCart(){

    let items = JSON.parse(
        localStorage.getItem("cart")
    ) || [];


    let box = document.getElementById("cartItems");


    if(box){

        if(items.length === 0){

            box.innerHTML =
            "سبد خرید خالی است";

        }else{

            box.innerHTML =
            items.join("<br>");

        }

    }

}



let searchBox =
document.getElementById("searchBox");


if(searchBox){

searchBox.addEventListener(
"keyup",
function(){

let value =
searchBox.value.toLowerCase();


let cards =
document.querySelectorAll(".card");


cards.forEach(function(card){

let text =
card.innerText.toLowerCase();


if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}


});


});


}


showCart();
