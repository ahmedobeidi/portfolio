document.addEventListener("DOMContentLoaded", () => {
    const sections = ["profile", "skills", "projects", "contact"];
    const navLinks = document.querySelectorAll("nav ul li a");
    const scrollOptions = {
        behavior: "smooth",
        block: "start",
    };

    let isScrolling = false; // Prevent overlapping scrolls

    const handleScroll = (event) => {
        if (isScrolling) {
            event.preventDefault();
            return;
        }

        // Find the currently visible section
        const currentSectionId = sections.find((id) => {
            const section = document.getElementById(id);
            const rect = section.getBoundingClientRect();
            return (
                rect.top <= window.innerHeight / 2 &&
                rect.bottom >= window.innerHeight / 2
            );
        });

        if (currentSectionId) {
            const currentIndex = sections.indexOf(currentSectionId);

            if (event.deltaY > 0 && currentIndex < sections.length - 1) {
                // Scroll down
                const nextSectionId = sections[currentIndex + 1];
                isScrolling = true;
                document.getElementById(nextSectionId).scrollIntoView(scrollOptions);
                setTimeout(() => (isScrolling = false), 800);
            } else if (event.deltaY < 0 && currentIndex > 0) {
                // Scroll up
                const prevSectionId = sections[currentIndex - 1];
                isScrolling = true;
                document.getElementById(prevSectionId).scrollIntoView(scrollOptions);
                setTimeout(() => (isScrolling = false), 800);
            }
        }

        event.preventDefault(); // Prevent default scrolling behavior
    };

    const handleNavLinkClick = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        isScrolling = true;
        document.getElementById(targetId).scrollIntoView(scrollOptions);
        setTimeout(() => (isScrolling = false), 800);
    };

    const updateActiveNavLink = () => {
        const currentSectionId = sections.find((id) => {
            const section = document.getElementById(id);
            const rect = section.getBoundingClientRect();
            return (
                rect.top <= window.innerHeight / 2 &&
                rect.bottom >= window.innerHeight / 2
            );
        });

        if (currentSectionId) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href").substring(1) === currentSectionId) {
                    link.classList.add("active");
                }
            });
        }
    };

    // Apply event listeners
    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("scroll", updateActiveNavLink);

    navLinks.forEach((link) => {
        link.addEventListener("click", handleNavLinkClick);
    });
});
