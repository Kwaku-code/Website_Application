let storage = localStorage.getItem('myCart');

// Parse JSON string to object
let storageValue = JSON.parse(storage);

let storageQuantity = storageValue.quantity;
let storageImage = storageValue.image;
let storageSize = storageValue.size;
console.log(storageValue.size);
let storageColor = storageValue.color;





document.getElementById("subTotal").innerHTML = storageQuantity * 89.50;
document.getElementById("checkoutImage").src = storageImage;
document.getElementById("color").innerHTML = storageColor;
document.getElementById("quantity").innerHTML = storageQuantity;
document.getElementById("size").innerHTML = storageSize;


document.getElementById("cartTotal").innerHTML = storageQuantity * 89.50;
document.getElementById("totalCost").innerHTML = storageQuantity * 89.50;
document.getElementById("discount").innerHTML = "0%";


let updateQuantity = () => {
    console.log("hello");
    let val = document.getElementById("numberField").value
    storageQuantity = val;


    document.getElementById("quantity").innerHTML = storageQuantity;

    let cartTotal = val * 89.50;
    document.getElementById("cartTotal").innerHTML = cartTotal;
    document.getElementById("subTotal").innerHTML = cartTotal;
    
}


let deleteAll = () => {
    let delID = document.getElementById("justDel");
    delID.remove();
    localStorage.clear()
    document.getElementById("subTotal").innerHTML = 0;
    document.getElementById("discount").innerHTML = "0%"
    document.getElementById("totalCost").innerHTML = 0
}




let applyDiscount = () => {
    let coupon = document.getElementById("coupon").value
    console.log(coupon)
    if (coupon.length < 5) {
        alert("Invalid Coupon");
    }
    else {
        document.getElementById("discount").innerHTML = "50%";

        document.getElementById("totalCost").innerHTML = 0.5 * parseFloat(document.getElementById("subTotal").innerText);
        console.log(document.getElementById("subTotal").innerHTML)
    }

}