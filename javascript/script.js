const header = document.querySelector(".header");
const menuIcon = document.querySelectorAll(".icon-mobile-nav");

for(let i = 0; i < menuIcon.length; i++) {
  menuIcon[i].addEventListener('click', function() {
    header.classList.toggle('nav-open')
  })
}
