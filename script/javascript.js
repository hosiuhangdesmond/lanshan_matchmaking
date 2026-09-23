/* ============================== */
/* from fe6/burger/javascript.js; handle the hamburger icon */
/* ============================= */
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');
    const paragraphs = document.querySelectorAll('p');

    toggleButton.addEventListener('click', ()=> {
        mobileMenu.classList.toggle('active');
        // completely hide all <p> elements whenever the hamburger icon is clicked
        paragraphs.forEach(p => p.classList.toggle('hidden-content'));
    })
})
/* ============================== */
/* end of from fe6/burger/javascript.js; handle the hamburger icon */
/* ============================= */

/* ============================== */
/* show submenu E2, E3, E4 */
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
/* end of show submenu E2, E3, E4 */
/* ============================= */
