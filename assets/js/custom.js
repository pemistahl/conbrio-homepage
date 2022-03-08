const navbar = document.getElementById("navigation");

function positionNavbar() {
  if (window.matchMedia("(min-width: 576px)").matches) {
    navbar.classList.remove("fixed-bottom");
    navbar.classList.add("sticky-top");
  } else {
    navbar.classList.remove("sticky-top");
    navbar.classList.add("fixed-bottom");
  }
}

window.addEventListener("resize", positionNavbar);

positionNavbar();
