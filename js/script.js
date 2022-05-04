let navItems = document.querySelectorAll('.header .nav-item');
let nav = document.querySelector('.header .nav');

document.querySelector('.header .menu-btn').onclick = () => {
    nav.classList.toggle('nav-active');
    document.querySelector('.menu-btn').classList.toggle('unactive');
    document.querySelector('.close-btn').classList.toggle('unactive');

    document.querySelector('.close-btn').onclick = () => {
        nav.classList.toggle('nav-active');
        document.querySelector('.menu-btn').classList.toggle('unactive');
        document.querySelector('.close-btn').classList.toggle('unactive');
    }
}


navItems.forEach(navItem => {
    navItem.onclick = () => {
        navItem.classList.toggle('active');
        navItem.querySelector('.sub-list').classList.toggle('active');
    }
})