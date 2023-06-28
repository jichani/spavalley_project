let $header = document.querySelector(".navbar-brand");
let $header_nav = document.querySelector("#navbarNav");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    $header.classList.add("scdown");
    $header_nav.classList.remove("pt-3");
  } else {
    $header.classList.remove("scdown");
    $header_nav.classList.add("pt-3");
  }
});
