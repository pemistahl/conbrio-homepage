const navbar = document.getElementById("cb-navigation");
const navLinks = document.querySelectorAll("#cb-navbar-nav > .nav-link");
const toTopNavLink = document.getElementById("cb-to-top-nav-link");
const toTopFooterNavLink = document.getElementById("cb-to-top-footer-nav-link");
const anchors = document.querySelectorAll("#ueberuns, #chorleitung, #konzerte, #mitsingen");
const menuToggle = document.getElementById("cb-navbar-content");
const menuButton = document.getElementById("cb-menu-button");
const mainContent = document.getElementById("cb-main-content");
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});
const observer = new IntersectionObserver(
  ([entry]) => toTopNavLink.classList.toggle("d-none", entry.intersectionRatio === 1),
  {rootMargin: '-1px 0px 0px 0px', threshold: [1]}
);
observer.observe(navbar);

function addNavbarAnchors() {
  anchors.forEach(anchor => anchor.classList.add("cb-anchor"));
}

function removeNavbarAnchors() {
  anchors.forEach(anchor => anchor.classList.remove("cb-anchor"));
}

function toggleNavbar() {
  mainContent.addEventListener("touchstart", () => bsCollapse.hide());
  menuButton.addEventListener("focusout", () => bsCollapse.hide());
  navLinks.forEach((l) => {
    l.addEventListener("click", () => {
      if (!window.matchMedia("(min-width: 576px)").matches) {
        bsCollapse.hide();
      }
    });
  });
}

function positionNavbar() {
  if (window.matchMedia("(min-width: 576px)").matches) {
    navbar.classList.remove("fixed-bottom");
    navbar.classList.add("navbar-dark", "bg-dark");
    if (window.matchMedia("(min-height: 500px)").matches) {
      navbar.classList.add("sticky-top");
      toTopFooterNavLink.classList.add("d-none");
      addNavbarAnchors();
    } else {
      navbar.classList.remove("sticky-top");
      toTopFooterNavLink.classList.remove("d-none");
      removeNavbarAnchors();
    }
  } else {
    navbar.classList.remove("sticky-top", "navbar-dark", "bg-dark");
    navbar.classList.add("fixed-bottom");
    toTopFooterNavLink.classList.remove("d-none");
    removeNavbarAnchors();
  }
}

window.addEventListener("resize", positionNavbar);

positionNavbar();
toggleNavbar();
