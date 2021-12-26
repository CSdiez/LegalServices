const open = document.getElementById('openBar');
const navItem = document.getElementById('navItem');
const close = document.getElementById('closeBar');


open.addEventListener('click', () => {
    navItem.classList.add('show');
    open.classList.add('noshow');
});
close.addEventListener('click' , () => {
    navItem.classList.remove('show');
});