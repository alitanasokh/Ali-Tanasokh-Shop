
let searchBox = document.getElementById("searchBox");

if(searchBox){

searchBox.addEventListener("keyup", function(){

let value = searchBox.value.toLowerCase();

let cards = document.querySelectorAll(".card");


cards.forEach(function(card){

let text = card.innerText.toLowerCase();

if(text.includes(value)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

});

}let slides = document.querySelectorAll(".slide");
let index = 0;

function changeSlide() {

    slides[index].classList.remove("active");

    index++;

    if(index >= slides.length){
        index = 0;
    }

    slides[index].classList.add("active");
}

setInterval(changeSlide, 3000);
let cart = [];

function addToCart(product){

    cart.push(product);

    alert(
        product + " به سبد خرید اضافه شد"
    );

}
