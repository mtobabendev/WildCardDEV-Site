const productDiv = document.querySelector("#custom");
    const products = [
        {
            name: "Template 1",
            description: "Website",
            image: "./assets/images/project-4.png",
            quantity: 1,
        },
        {
            name: "Template 2",
            description: "Wesbite",
            image: "./assets/images/project-8.jpg",
            quantity: 1,
        },
        {
            name: "Template 3",
            description: "Website",
            image: "./assets/images/project-9.png",
            quantity: 1,
        },
    ];

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    function addItem(e) {
       if (cart.some((item) => item.name === e.name)) {
        const item = cart.find((element) => element.name == e.name);
        item.quantity++;
       } else {
       cart.push(e);
       };
       //e. target is the element that they clicked on.
       console.log(cart);
       
       localStorage.setItem("cart", JSON.stringify(cart));
    }
    
    for (let i = 0; i < products.length; i++) {
        //make a new div
        const newDiv = document.createElement("div");
        newDiv.style.width = "33%";

        //add the current products information to that new div
        //(The current item in the loop is '1')
        const nameHeading = document.createElement("h3");
        nameHeading.textContent = products[i].name;

        const descriptionText = document.createElement("p");
        descriptionText.textContent = products[i].description;

        const image = document.createElement("img");
        image.src = products[i].image;
        image.classList.add("images");


        const addToCart = document.createElement("button");
        addToCart.addEventListener("click", () => addItem(products[i]));
        addToCart.classList.add("buttonCart");
        addToCart.classList.add("addToCart");


        addToCart.textContent = "Add to cart";

        addToCart.innerHTML = 'Add to Cart';


        newDiv.append(nameHeading, descriptionText, image, addToCart );

        // add an "add to cart" button to the current product
      
        //append that div to our products div
        productDiv.append(newDiv);

    }

   
