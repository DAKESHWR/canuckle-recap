
// Initialize scripts
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMenu();
    initPdfDownload();
});

// Dark/Light Theme Handler
function initTheme() {
    const themeToggle = document.getElementById("themeToggle");
    const currentTheme = localStorage.getItem("theme") || "light";

    if (currentTheme === "dark") {
        document.body.classList.add("dark");
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const theme = document.body.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("theme", theme);
    });
}

// Responsive Mobile Menu Handler
function initMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const mobileNav = document.getElementById("mobileNav");

    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.classList.contains("open");
        if (isOpen) {
            menuToggle.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            mobileNav.classList.remove("open");
        } else {
            menuToggle.classList.add("open");
            menuToggle.setAttribute("aria-expanded", "true");
            mobileNav.classList.add("open");
        }
    });

    // Close menu when clicking links
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            mobileNav.classList.remove("open");
        });
    });
}

// PDF Download printing functionality
function initPdfDownload() {
    const downloadPdfBtn = document.getElementById("downloadPdfBtn");
    if (downloadPdfBtn) {
        downloadPdfBtn.addEventListener("click", () => {
            window.print();
        });
    }
}
