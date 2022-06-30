//variables
const navbar = document.querySelector("#navbar");

//eventListener

eventListener();
function eventListener() {
  document.addEventListener("scroll", () => {
    if (window.scrollY === 0 && window.pageYOffset === 0) {
      navbar.style.backgroundColor = "transparent";
    } else {
      navbar.style.backgroundColor = "#060606 ";
    }
    scrollNumber = window.scrollY;
  });
}

//functions
