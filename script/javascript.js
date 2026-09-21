/* ============================== */
/* from fe6/burger/javascript.js */
/* ============================= */
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');
    toggleButton.addEventListener('click', ()=> {
        mobileMenu.classList.toggle('active');
    })
})
/* ============================== */
/* end of from fe6/burger/javascript.js */
/* ============================= */

/* ============================== */
/* show submenu */
/* ============================= */
document.addEventListener("DOMContentLoaded", () => {
    const submenuParents = document.querySelectorAll('.navbar .has-submenu > a');

    submenuParents.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // prevent navigation
        const parentLi = link.parentElement;
        parentLi.classList.toggle('open');
    });
    });
});

/* ============================== */
/* end of show submenu */
/* ============================= */
