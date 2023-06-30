const header = document.querySelector('.navbar');
const navbar_brand = document.querySelector('.navbar-brand');
const nav_links = document.querySelectorAll('.nav-link');
const menu = document.querySelector('.navbar-toggler-icon');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
        navbar_brand.style.color = 'white';
        nav_links.forEach(nav_link=>{
        nav_link.style.color = 'white';
        });
        menu.style.color = 'white';
    }
    else {
        header.classList.remove('navbarDark');
    }
}