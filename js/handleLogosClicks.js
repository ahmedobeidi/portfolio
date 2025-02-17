document.addEventListener("DOMContentLoaded", function () {
    // Define the mapping of images to URLs
    const imageLinks = {
        "tailwind.png": "https://ahmedobeidi.github.io/The-Mountain/",
        "git.png": "https://git-scm.com/",
        "js.png": "https://ahmedobeidi.github.io/Vanilla-Front-Drumpad/",
        "php.png": "https://www.php.net/",
        "symfo.png": "https://symfony.com/"
    };

    // Select all elements with class "image_div"
    document.querySelectorAll(".image_div").forEach(div => {
        div.addEventListener("click", function () {
            const img = this.querySelector("img"); // Find the image inside the div
            if (img) {
                const src = img.getAttribute("src"); // Get the image source
                const fileName = src.split("/").pop(); // Extract just the filename

                if (imageLinks[fileName]) {
                    window.open(imageLinks[fileName], "_blank"); // Open link in a new tab
                }
            }
        });
    });
});