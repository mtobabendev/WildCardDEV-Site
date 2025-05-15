const cartDiv = document.querySelector("#customPage");
// let cart = JSON.parse(localStorage.getItem("customPage")) || [];
console.log(cart);

// Display the custom items
const newDiv = document.createElement("div");



cartDiv.append(newDiv);
const button = document.createElement("button");
button.textContent = "Clear Cart";
button.classList.add ("clearCart")
button.style.height = "50px";
button.textContent.color = "black";
button.style.width = "150px";
button.classList.add("clearCart");
button.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});
cartDiv.append(button);

function removeItem(e) {
    
    cart = cart.filter((item) => e.name != item.name);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
    
}


for (let i = 0; i < cart.length; i++) {
    //make a new div
    const newDiv = document.createElement("div");
    newDiv.style.width = "33%";
    //add the current cart information to that new div
    //(The current item in the loop is '1')
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = cart[i].name;

    const descriptionText = document.createElement("p");
    descriptionText.textContent = cart[i].description;

    

    const image = document.createElement("img");
    image.src = cart[i].image;
    image.classList.add("images");
    
    const addToCart = document.createElement("button");
    addToCart.addEventListener("click", () => addItem(cart[i]));
    addToCart.classList.add("buttonCart");
    


    addToCart.textContent = "Add to cart";

    addToCart.innerHTML = 'Add to Cart';


   

    // add an "add to cart" button to the current product
  
    //append that div to our cart div
    cartDiv.append(newDiv);

    const removeFromCart = document.createElement("button");
    removeFromCart.addEventListener("click", () => removeItem(cart[i], newDiv));
    removeFromCart.innerHTML = 'Remove';
    removeFromCart.classList.add("removeCart");
    
    newDiv.append(nameHeading, descriptionText,  image, removeFromCart);
}