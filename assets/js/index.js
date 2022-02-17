//Variable

const emailInput = document.querySelector("#email-input");
const navbar = document.querySelector("#Sidenav");

let outSide = document.createElement("div");

//Event Listener

(function () {
  emailInput.addEventListener("blur", validateEmail);
  document.querySelector("#hamburgerMenu").addEventListener("click", showMobileMenu);
})();

//functions

function validateEmail() {
  if (this.value.includes("@")) {
    this.parentElement.style.borderColor = "white";
  } else {
    this.parentElement.style.borderColor = "red";
  }
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
function showMobileMenu() {
  navbar.classList.remove("hidden");
  sleep(10).then(() => {
    navbar.style.right = "0px";
  });
  outSide.classList.add("outside");
  outSide.setAttribute("onclick", "hideMobileMenu()");
  document.body.appendChild(outSide);
}
function hideMobileMenu() {
  navbar.style.right = "-300px";
  sleep(601).then(() => {
    navbar.classList.add("hidden");
  });
  outSide.classList.remove("outside");
  outSide.removeAttribute("onclick");
  document.body.appendChild(outSide);
}