function search() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const searchResultsElement = document.getElementById("searchResults");
    searchResultsElement.innerHTML = "";

    const labels = [
        { text: "AIRism Cotton Striped Crew Neck Oversized T-Shirt", link: "Https://Google.com" },
        { text: "AIRism V Neck T-Shirt", link: "Assignment1Page3Part7.html" },
        { text: "Supima Cotton Crew Neck Short Sleeve T-Shirt", link: "Assignment1Page3Part8.html" },
        { text: "DRY-EX Crew Neck Short Sleeve T-Shirt", link: "Assignment1Page3Part9.html" },
        { text: "DRY-EX Gradation Polo Shirt", link: "Assignment1Page3Part10.html" },
        { text: "AIRism Short Sleeve Polo Shirt", link: "Assignment1Page3Part11.html" },
        { text: "Dry Pique Striped Short Sleeve Polo Shirt", link: "Assignment1Page3Part12.html" },
        { text: "AIRism Short Sleeve Button-up Polo Shirt", link: "Assignment1Page3Part13.html" },
        { text: "Sweat Long Sleeve Full-Zip Hoodie", link: "Assignment1Page3Part14.html" },
        { text: "Blue Long Sleeve Full-Zip Hoodie", link: "Assignment1Page3Part15.html" },
        { text: "Reversible Parka", link: "Assignment1Page3Part16.html" },
        { text: "AirSense Jacket", link: "Assignment1Page3Part17.html" },
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
    }
}

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var isPaymentSuccessful = true;

    if (isPaymentSuccessful) {
        var paymentSuccessNotification = document.getElementById('payment-success-notification');
        paymentSuccessNotification.classList.remove('hidden');

        setTimeout(function() {
            paymentSuccessNotification.classList.add('hidden');
        }, 1000);

        document.getElementById('payment-form').reset();
    }
});

