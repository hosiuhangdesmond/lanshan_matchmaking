/* ============================== */
/* from fe6/burger/javascript.js; handle the hamburger icon */
/* ============================= */
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');
    const lists = document.querySelectorAll('.box');

    toggleButton.addEventListener('click', ()=> {
        mobileMenu.classList.toggle('active');
        lists.forEach(box => box.classList.toggle('hidden-content'));
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

/* ============================== */
/* handle submit button in e05_01 */
/* ============================= */

document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector('.questionnaire');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("性格測試已完成!");
});
});

/* ============================== */
/* end of handle submit button in e05_01 */
/* ============================= */

/* ============================== */
/* handle e08_00_MemberLogin */
/* ============================= */

(function () {
"use strict";

/* -----------------------------------------------------------
   * Element references
   * --------------------------------------------------------- */
const openLoginBtn    = document.getElementById("openLoginBtn");
const openRegisterBtn = document.getElementById("openRegisterBtn");

const loginDialog     = document.getElementById("loginDialog");
const loginForm       = document.getElementById("loginForm");
const clearLoginBtn   = document.getElementById("clearLoginBtn");
const cancelLoginBtn  = document.getElementById("cancelLoginBtn");

const registerDialog     = document.getElementById("registerDialog");
const registerForm       = document.getElementById("registerForm");
const clearRegisterBtn   = document.getElementById("clearRegisterBtn");
const cancelRegisterBtn  = document.getElementById("cancelRegisterBtn");

const successDialog   = document.getElementById("successDialog");
const successMessage  = document.getElementById("successMessage");
const successOkBtn    = document.getElementById("successOkBtn");

/* -----------------------------------------------------------
   * Hardening: prevent Esc and backdrop click from closing
   * a form dialog. The user MUST use 提交 / 取消 to exit.
   * --------------------------------------------------------- */
function lockdownDialog(dialog) {
    // Block Esc key (fires the "cancel" event)
    dialog.addEventListener("cancel", function (e) {
    e.preventDefault();
    });

    // Block click on the ::backdrop
    // When the user clicks the backdrop, e.target === dialog itself.
    dialog.addEventListener("click", function (e) {
    if (e.target === dialog) {
        e.preventDefault();
        e.stopPropagation();
    }
    });
}

lockdownDialog(loginDialog);
lockdownDialog(registerDialog);

/* -----------------------------------------------------------
   * Success dialog is NOT locked down the same way — but we
   * still want the user to acknowledge it with 確定. We only
   * allow closing via the button.
   * --------------------------------------------------------- */
successDialog.addEventListener("cancel", function (e) {
    e.preventDefault();
});
successDialog.addEventListener("click", function (e) {
    if (e.target === successDialog) {
    e.preventDefault();
    e.stopPropagation();
    }
});

/* -----------------------------------------------------------
   * Helpers
* --------------------------------------------------------- */
function openFormDialog(dialog, form, firstInputId) {
    form.reset();
    dialog.showModal();
    // Focus the first input for convenience
    const firstInput = document.getElementById(firstInputId);
    if (firstInput) firstInput.focus();
}

function showSuccess(message) {
    successMessage.textContent = message;
    successDialog.showModal();
}

/* -----------------------------------------------------------
   * Open buttons
   * --------------------------------------------------------- */
openLoginBtn.addEventListener("click", function () {
    openFormDialog(loginDialog, loginForm, "loginId");
});

openRegisterBtn.addEventListener("click", function () {
    openFormDialog(registerDialog, registerForm, "regEmail");
});

/* -----------------------------------------------------------
   * Modal A — Login
   * --------------------------------------------------------- */
clearLoginBtn.addEventListener("click", function () {
    loginForm.reset();
    document.getElementById("loginId").focus();
});

cancelLoginBtn.addEventListener("click", function () {
    loginForm.reset();
    loginDialog.close();
});

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("loginId").value.trim();
    const pw = document.getElementById("loginPassword").value;

    if (!id || !pw) {
    alert("請輸入已登記電郵地址／電話號碼及密碼。");
    return;
    }

    // (A)(1)(d) Assume submission always succeeds.
    // Show the success message dialog on top of the login dialog.
    showSuccess("登入成功！");
});

/* -----------------------------------------------------------
   * Modal B — Register
   * --------------------------------------------------------- */
clearRegisterBtn.addEventListener("click", function () {
    registerForm.reset();
    document.getElementById("regEmail").focus();
});

cancelRegisterBtn.addEventListener("click", function () {
    registerForm.reset();
    registerDialog.close();
});

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email  = document.getElementById("regEmail").value.trim();
    const phone  = document.getElementById("regPhone").value.trim();
    const nameZh = document.getElementById("regNameZh").value.trim();
    const nameEn = document.getElementById("regNameEn").value.trim();
    const pw     = document.getElementById("regPassword").value;

    if (!email || !phone || !nameZh || !nameEn || !pw) {
    alert("請填寫所有欄位。");
    return;
    }

    // (B)(1)(g) Assume success.
    showSuccess("登記成功！");
});

/* -----------------------------------------------------------
   * Success dialog — OK button
   * --------------------------------------------------------- */
successOkBtn.addEventListener("click", function () {
    successDialog.close();

    // Close whichever form dialog is currently open, and reset it.
    if (loginDialog.open) {
    loginForm.reset();
    loginDialog.close();
    }
    if (registerDialog.open) {
    registerForm.reset();
    registerDialog.close();
    }

    // Return focus to the original page buttons
    openLoginBtn.focus();
});
})();

/* ============================== */
/* end of handle e08_00_MemberLogin */
/* ============================= */



