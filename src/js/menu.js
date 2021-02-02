<<<<<<< Updated upstream
function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.menu-button,.buy-now');
  let links = menu.find('.menu-link');
  let overlay = menu.find('.menu-overlay');
  button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
  });
  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
  function toggleMenu() {
      menu.toggleClass('menu-active');
      if (menu.hasClass('menu-active')) {
          $('body').css('overflow', 'hidden');
      } else {
          $('body').css('overflow', 'visible');
      }
  }
}
=======
(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
  
    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
  
      mobileMenuRef.classList.toggle("is-open");
    });
  })();
>>>>>>> Stashed changes
