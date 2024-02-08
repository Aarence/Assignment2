var smallImgElements = document.getElementsByClassName("small-img");
var MainImg = document.getElementById("MainImg");

for (let i = 0; i < smallImgElements.length; i++) {
    smallImgElements[i].onclick = function () {
        MainImg.src = this.src;
    };
}

var cartItems = [];

// Function to update the shopping cart display
function updateCartDisplay() {
    // Select the list element where the cart items will be displayed
    var itemList = document.querySelector('.items');
    if (!itemList) {
        console.error("Element with class 'items' not found");
        return; // Exit function if element not found
    }

    // Clear the existing content of the list
    itemList.innerHTML = '';

    // Initialize total price
    var totalPrice = 0;

    // Loop through each item in the cart
    cartItems.forEach(function(item) {
        // Create a new list item for each cart item
        var listItem = document.createElement('li');
        listItem.textContent = item.name + ' - Size: ' + item.size + ' - Quantity: ' + item.quantity + ' - Price: S$' + (item.price * item.quantity).toFixed(2);
        itemList.appendChild(listItem);

        // Update the total price
        totalPrice += item.price * item.quantity;
    });

    // Update the total price display
    document.getElementById('total-amount').textContent = 'S$' + totalPrice.toFixed(2);
}


// Function to add items to the cart
function addToCart(itemName, itemPrice, size, quantity) {
    // Create an object representing the item to add to the cart
    var item = {
        name: itemName,
        price: itemPrice,
        size: size,
        quantity: parseInt(quantity)  // Convert quantity to an integer
    };

    // Add the item to the cart
    cartItems.push(item);

    // Store the cart items in local storage for persistence across pages (optional)
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update the shopping cart display
    updateCartDisplay();
}

// Call updateCartDisplay function on page load to populate the cart from local storage
updateCartDisplay();


function search() {
    const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    const searchResultsElement = document.getElementById("searchResults");
    searchResultsElement.innerHTML = "";

    if (searchTerm === "") {
        const li = document.createElement("li");
        li.textContent = "Please enter a search term";
        searchResultsElement.appendChild(li);
        setTimeout(function () {
            li.style.display = "none";
        }, 1000);

        return;
    }

    const labels = [
        { text: "AIRism Cotton Striped Crew Neck Oversized T-Shirt", link: "product1.html" },
        { text: "AIRism V Neck T-Shirt", link: "product2.html" },
        { text: "Supima Cotton Crew Neck Short Sleeve T-Shirt", link: "product3.html" },
        { text: "DRY-EX Crew Neck Short Sleeve T-Shirt", link: "product4.html" },
        { text: "DRY-EX Gradation Polo Shirt", link: "product5.html" },
        { text: "AIRism Short Sleeve Polo Shirt", link: "product6.html" },
        { text: "Dry Pique Striped Short Sleeve Polo Shirt", link: "product7.html" },
        { text: "AIRism Short Sleeve Button-up Polo Shirt", link: "product8.html" },
        { text: "Sweat Long Sleeve Full-Zip Hoodie", link: "product9.html" },
        { text: "Blue Long Sleeve Full-Zip Hoodie", link: "product10.html" },
        { text: "Reversible Parka", link: "product11.html" },
        { text: "AirSense Jacket", link: "product12.html" },
    ];

    let foundMatch = false;

    labels.forEach(label => {
        if (label.text.toLowerCase().includes(searchTerm)) {
            foundMatch = true;
            window.open(label.link, "_blank");
        }
    });

    if (!foundMatch) {
        const li = document.createElement("li");
        li.textContent = "No results found";
        searchResultsElement.appendChild(li);

        setTimeout(function () {
            li.style.display = "none";
        }, 1000);
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        showSuccessMessage();
        resetForm();
    });

    function showSuccessMessage() {
        const successDiv = document.createElement("div");
        successDiv.classList.add("success-message");
        successDiv.textContent = "Request successfully sent!";

        form.insertAdjacentElement("afterend", successDiv);

        const player = document.createElement("dotlottie-player");
        player.setAttribute("src", "https://lottie.host/b4557105-df49-4097-adb3-771331ca56b8/RyRJZjUegg.json");
        player.setAttribute("background", "opaque");
        player.setAttribute("speed", "0.75");
        player.style.width = "100px";
        player.style.height = "100px";
        player.setAttribute("loop", true);
        player.setAttribute("autoplay", true);
        successDiv.appendChild(player);

        successDiv.style.marginTop = "10px";
        successDiv.style.textAlign = "center";
        successDiv.style.fontSize = "24px";

        setTimeout(function () {
            successDiv.remove();
            player.remove();
        }, 2500);
    }

    function resetForm() {
        form.reset();
    }
});




