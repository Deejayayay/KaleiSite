
//for filters
function displayProducts(){

    //product data is an array containing objects with the product info
    let productData = [
        {
            productName: "Demo Product 1",
            category: "Earings",
            price: "$35",
            image: "/img/redhoodie.jpg"
        }
    ];

    //access the products element in the shop.html
    let products = document.getElementById("products");
    //create a variable to store the html to later plug into products
    let html = "";

    //todo add more products and make it ref links

    //loop through the productData array and add the html to the html variable
    for(let i of productData){
        //adds data to the html from the productData array
        html += `
        <div class="card hide">
            <img class="image-container" src="${i.image}" alt="${i.productName}">
            <div class="product-info">
                <h3 class="product-name">${i.productName}</h3>
                <p>${i.category}</p>
                <p>${i.price}</p>
            </div>
        </div>
        `;
    }
    //if statement to see if products is an element in the shop.html and if it has data from productsData
    if(products) {
        products.innerHTML = html;
    }
    else {
        //if not then it produces an error
        console.error("No products element found");
    }
    
}

//calls the function to display the products
displayProducts();

/*--- filters ---*/

//gets called from the buttons in shop.html with the onclick method passing through the parameter value
function filterProduct(value) {
    //gets all the buttons with the class button-value and puts them in the buttons variable
    let buttons = document.querySelectorAll(".button-value");
    //iterates through each button and checks if the value is equal to the button's inner text
    buttons.forEach((button) => {
        if(value === button.innerText){
            //if so it adds the active class to the button
            button.classList.add("active");
        } else {
            //else removes it
            button.classList.remove("active");
        }
    });

    //gets all the cards and puts them in the elements variable
    let elements = document.querySelectorAll(".card");

    //iterates through each element and checks if the value is equal to the element's inner text
    elements.forEach((element) => {
        if(value === "All"){
            element.classList.remove("hide");
        } else if(element.querySelector("p").innerText === value){
            //if the value is equal to innertext then it removes the hide class showing the card
            element.classList.remove("hide");
        } else {
            //else it adds the hide class hiding the card
            element.classList.add("hide");
        }
    });
}   

//adds an event listener to the search button
document.getElementById("search").addEventListener
("click", () => {
    //gets the value of the search input and puts it in the searchInput variable
    let searchInput = document.getElementById("search-input").value;
    //gets all the elements with the class product-name and puts them in the elements variable
    let elements = document.querySelectorAll(".product-name");
    //gets all the cards and puts them in the cards variable
    let cards = document.querySelectorAll(".card");
    //test
    console.log(searchInput);

    //iterates through each element and checks if the value is equal to the element's inner text
    elements.forEach((element, index) => {
        if(element.innerText.includes(searchInput)){
            //then shows all the cards
            cards[index].classList.remove("hide");
            //todo improve search to make it off enter key and more accurate
        } else {
            cards[index].classList.add("hide");
        }
    });
})

//automatically makes "All" active when the page is loaded
window.onload = () => {
    filterProduct("All");
};



    


