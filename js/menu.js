document.addEventListener("DOMContentLoaded", () => {
    const menuBurger = document.querySelector(".menu_burger_container");
    const mobileNav = document.createElement("nav");
    const closeIcon = document.createElement("img");

    // Create mobile navigation menu
    mobileNav.classList.add("navbar_mobile");
    mobileNav.innerHTML = `
        <ul>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contacts</a></li>
        </ul>
    `;

    // Add close icon
    closeIcon.src = "./assets/close-icon.png"; // Replace with your close icon image path
    closeIcon.alt = "Close";
    closeIcon.classList.add("menu_close");

    // Append close icon to mobile menu
    mobileNav.appendChild(closeIcon);
    document.body.appendChild(mobileNav);

    // Open menu
    menuBurger.addEventListener("click", () => {
        mobileNav.classList.add("active");
    });

    // Close menu when clicking the close button
    closeIcon.addEventListener("click", () => {
        mobileNav.classList.remove("active");
    });

    // Close menu when clicking on a menu link
    mobileNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("active");
        });
    });
});
