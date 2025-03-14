document.addEventListener("DOMContentLoaded", () => {
    const ramens = [
        { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
        { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
        { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg", rating: 3, comment: "Rich and creamy!" }
    ];

    function displayRamens() {
        const ramenMenu = document.getElementById("ramen-menu");
        ramens.forEach(ramen => {
            const img = document.createElement("img");
            img.src = ramen.image;
            img.addEventListener("click", () => displayRamenDetails(ramen));
            ramenMenu.appendChild(img);
        });
    }

    function displayRamenDetails(ramen) {
        document.getElementById("ramen-name").textContent = ramen.name;
        document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
        document.getElementById("ramen-image").src = ramen.image;
        document.getElementById("ramen-rating").textContent = `Rating: ${ramen.rating}`;
        document.getElementById("ramen-comment").textContent = `Comment: ${ramen.comment}`;
    }

    function addSubmitListener() {
        document.getElementById("ramen-form").addEventListener("submit", event => {
            event.preventDefault();
            const newRamen = {
                name: event.target.name.value,
                restaurant: event.target.restaurant.value,
                image: event.target.image.value,
                rating: event.target.rating.value,
                comment: event.target.comment.value
            };
            const img = document.createElement("img");
            img.src = newRamen.image;
            img.addEventListener("click", () => displayRamenDetails(newRamen));
            document.getElementById("ramen-menu").appendChild(img);
            event.target.reset();
        });
    }

    function main() {
        displayRamens();
        addSubmitListener();
    }

    main();
});
