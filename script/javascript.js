/* ============================== */
/* from fe6/burger/javascript.js; handle the hamburger icon */
/* ============================= */
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');
    // const paragraphs = document.querySelectorAll('p');
    // const heads = document.querySelectorAll('h1');
    // const head2 = document.querySelectorAll('h2');
    // const head3 = document.querySelectorAll('h3');
    const lists = document.querySelectorAll('.box');
    const footers = document.querySelectorAll('footer');
    const imgs = document.querySelectorAll('img');

    toggleButton.addEventListener('click', ()=> {
        mobileMenu.classList.toggle('active');
        // completely hide all <p> elements whenever the hamburger icon is clicked
        // paragraphs.forEach(p => p.classList.toggle('hidden-content'));
        // heads.forEach(h1 => h1.classList.toggle('hidden-content'));
        // head2.forEach(h2 => h2.classList.toggle('hidden-content'));
        // head3.forEach(h3 => h3.classList.toggle('hidden-content'));
        lists.forEach(box => box.classList.toggle('hidden-content'));
        footers.forEach(footer => footer.classList.toggle('hidden-content'));
        imgs.forEach(img => img.classList.toggle('hidden-content'));
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
