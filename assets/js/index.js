//Variable

const emailInput = document.querySelector('#email-input');
const navbar = document.querySelector("#Sidenav");
const navbarOutSide = document.querySelector("#sidebar-overlay");


//Event Listener

(function () {
    emailInput.addEventListener('blur' , validateEmail)	 
})();

eventListener();
function eventListener() {
  document.querySelector("#hamburgerMenu").addEventListener("click", openNav);
  navbarOutSide.addEventListener("click", closeNav);
}

//functions

function validateEmail(){
    if(this.value.includes('@')){
      this.parentElement.style.borderColor = "white";
    }
    else{
        this.parentElement.style.borderColor = "red";  
    }
}

function openNav() {
    navbar.style.width = "300px";
    document.querySelectorAll("#Sidenav a").forEach((e) => {
      e.style.display = "block";
    });
    navbarOutSide.style.display = "block";
  }
  
  function closeNav() {
    navbar.style.width = "0";
    document.querySelectorAll("#Sidenav a").forEach((e) => {
      e.style.display = "none";
    });
    navbarOutSide.style.display = "none";
  }

//loop
if (document.getElementById("Sidenav")) {
    document.querySelectorAll("#Sidenav a").forEach((e) => {
      e.style.display = "none";
    });
  }


let createRedBox = () => {
  let mainBox = document.querySelector("#contact-us-box");
  let redBox = document.querySelector("#box-red");
  redBox.style.width = `${mainBox.offsetWidth}px`;
  redBox.style.height = `${mainBox.offsetHeight}px`;
};
createRedBox();



