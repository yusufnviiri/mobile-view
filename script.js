/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const menu3 = document.querySelector('#menu3');
function openMenu() {
  menu3.style.display = 'flex';
}
function closeMenu() {
  menu3.style.top = '-100%';
  menu3.style.width = '50%';
  window.setTimeout(() => {
    window.location.reload();
  }, 5000);
}