var slideIndex = 0;
slideshow();

function slideshow() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(slideshow, 4000); // Change image every 2 seconds
}

let goods = {
    quantity: 0,
    image: "",
    size: "",
    color: ""

}


let image1 = document.getElementById('slide1');
let image2 = document.getElementById('slide2');
let image3 = document.getElementById('slide3');
let image4 = document.getElementById('slide4');

let selectPink = () => {
    document.getElementById('colorName').innerHTML = "Pink";
    image1.src = "img/pink1.jpg"
    image2.src = "img/pink2.jpg"
    image3.src = "img/pink3.jpg"
    image4.src = "img/pink4.jpg"
    let presentImg = document.getElementById("slide1").src;
    goods.image = presentImg;
    document.getElementById("smallImage").src = presentImg;
    goods.color = "Pink"
}
let selectBlue = () => {
    document.getElementById('colorName').innerHTML = "Blue"
    image1.src = "img/blue1.jpg"
    image2.src = "img/blue2.jpg"
    image3.src = "img/blue3.jpg"
    image4.src = "img/blue4.jpg"
    let presentImg = document.getElementById("slide1").src;
    goods.image = presentImg;
    document.getElementById("smallImage").src = presentImg;
    goods.color = "Blue"
}

let quantityVal = parseInt(document.getElementById('quantity').value);
let add = () => {
    if (quantityVal < 10) {
        quantityVal += 1;
        document.getElementById("quantity").value = quantityVal;
    }
}

let subtract = () => {
    if (quantityVal > 1) {
        quantityVal -= 1;
        document.getElementById("quantity").value = quantityVal;
    }
}




let addToCart = () => {
    document.getElementById("rightSidepanel").style.width = "20rem";

    //get quantity value and calc subtotal
    let newquantityVal = parseInt(document.getElementById('quantity').value);
    document.getElementById("quantityPicked").innerHTML = newquantityVal;
    goods.quantity = newquantityVal;
    let subTotal = newquantityVal * 89.50;
    document.getElementById("subTotal").innerHTML = subTotal;

    //get size value
    let sizeOption = document.getElementById("sizeOptions");
    let myValue = sizeOption.options[sizeOption.selectedIndex].value;
    goods.color =document.getElementById('colorName').innerHTML;
    
    goods.size = myValue;
    document.getElementById('sizePicked').innerHTML = myValue;
    document.getElementsByClassName("sizePicker").innerHTML = sizeOption;





    //save goods object to local storage
    localStorage.setItem('myCart', JSON.stringify(goods));

    
}

let closeNav = () => {
    document.getElementById("rightSidepanel").style.width = "20rem";
}