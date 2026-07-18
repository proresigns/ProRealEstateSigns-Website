const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileNavigation = document.querySelector(".mobile-nav");

if (mobileMenuButton && mobileNavigation) {
    mobileMenuButton.addEventListener("click", () => {
        const menuIsOpen = mobileNavigation.classList.toggle("is-open");

        mobileMenuButton.classList.toggle("is-open", menuIsOpen);
        mobileMenuButton.setAttribute("aria-expanded", String(menuIsOpen));
        mobileMenuButton.setAttribute(
            "aria-label",
            menuIsOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    mobileNavigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mobileNavigation.classList.remove("is-open");
            mobileMenuButton.classList.remove("is-open");
            mobileMenuButton.setAttribute("aria-expanded", "false");
            mobileMenuButton.setAttribute("aria-label", "Open navigation menu");
        });
    });
}