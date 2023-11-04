//todo Automatically create the items listing


//for sidebar


//for filters
let products = {
    data: [
        {
            productName: "Pearl Earings",
            category: "Earings",
            price: "$XX",
            image: "pear-ear.jpeg"
        },
        {
            productName: "Ring",
            category: "Rings",
            price: "$XX",
            image: "pearl.jpeg"
            },
    ],
};

for(let i of products.data) {
    //create card
    let card = document.createElement("div");
    //card category
    card.classList.add("card", "i.category");

    //img div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    //img tag
    let image = document.createElement("img");
    img.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    document.getElementById("products").appendChild(card)
} 