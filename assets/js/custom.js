const navbar = document.getElementById("cb-navigation");
const navLinks = document.querySelectorAll(".nav-link");
const menuToggle = document.getElementById("cb-navbarContent");
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});

function toggleNavbar() {
  navLinks.forEach((l) => {
    l.addEventListener("click", () => {
      if (!window.matchMedia("(min-width: 576px)").matches) {
        bsCollapse.toggle();
      }
    });
  });
}

function positionNavbar() {
  if (window.matchMedia("(min-width: 576px)").matches) {
    navbar.classList.remove("fixed-bottom");
    navbar.classList.add("navbar-dark", "bg-dark");
    if (window.matchMedia("(min-height: 800px)").matches) {
      navbar.classList.add("sticky-top");
    } else {
      navbar.classList.remove("sticky-top");
    }
  } else {
    navbar.classList.remove("sticky-top", "navbar-dark", "bg-dark");
    navbar.classList.add("fixed-bottom");
  }
}

window.addEventListener("resize", positionNavbar);

positionNavbar();
toggleNavbar();
