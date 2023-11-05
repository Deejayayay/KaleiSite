//todo Automatically create the items listing


//for sidebar


//for filters
function displayProducts(){

    let productData = [
        {
            productName: "Pearl Earings",
            category: "Earings",
            price: "$XX",
            image: "/img/redhoodie.jpg"
        }
    ];

    let products = document.getElementById("products");
    let html = "";
    //todo add more products and make it ref links
    for(let i of productData){
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
    if(products) {
        products.innerHTML = html;
    }
    else {
        console.error("No products element found");
    }
    
}

displayProducts();

function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if(value === button.innerText){
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");

    elements.forEach((element) => {
        if(value === "All"){
            element.classList.remove("hide");
        } else if(element.querySelector("p").innerText === value){
            element.classList.remove("hide");
        } else {
            element.classList.add("hide");
        }
    });
}   

document.getElementById("search").addEventListener
("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    console.log(searchInput);

    elements.forEach((element, index) => {
        if(element.innerText.includes(searchInput)){
            cards[index].classList.remove("hide");
            //todo imrpove search
        } else {
            cards[index].classList.add("hide");
        }
    });
})

//for filters
window.onload = () => {
    filterProduct("All");
};



    


