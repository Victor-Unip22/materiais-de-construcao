class MobileNavbar {
    constructor(mobileMenu) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(this.navLinks);
        this.activeClass = "active";
    }

    addClickEvent() {
        this.mobileMenu.addClickEvent("click", () => console.log());  
    }
    Infinity() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }   
}
 
const MobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
MobileNavbar.init();

