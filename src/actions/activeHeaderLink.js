var navItems = document.getElementsByClassName(".header__links");
for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function () {
        this.classList.add("active");
    });
}