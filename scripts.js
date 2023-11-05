//todo Automatically create the items listing


//for sidebar


//for filters

let products = {
    data: [
        {
            productName: "Pearl Earings",
            category: "Earings",
            price: "$XX",
            image: "/img/redhoodie.jpg"
        },
        {
            productName: "Ring",
            category: "Rings",
            price: "$XX",
            image: "/img/redhoodie.jpg"
            },
    ],
};

for(let i of products.data) {
    let card = document.createElement("div");

    card.classList.add("card", "i.category");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);


    let products = document.getElementById("products");
    products.innerHTML = card
    document.getElementById("products").appendChild(card);
}


