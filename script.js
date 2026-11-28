
const languageBtn = document.getElementById("languageBtn");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

let currentLanguage = "fa";

// LANGUAGE SWITCHER

languageBtn.addEventListener("click", () => {

    currentLanguage = currentLanguage === "fa" ? "en" : "fa";

    document.documentElement.lang = currentLanguage;

    document.documentElement.dir =
        currentLanguage === "fa" ? "rtl" : "ltr";

    document.querySelectorAll("[data-fa]").forEach(element => {

        element.innerHTML =
            element.getAttribute("data-" + currentLanguage);

    });

    languageBtn.textContent =
        currentLanguage === "fa" ? "EN" : "FA";

});

// MOBILE MENU

menuToggle.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// CLOSE MENU AFTER CLICK

nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});
