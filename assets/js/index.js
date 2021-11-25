//Variable

const emailInput = document.querySelector('#email-input');

//Event Listener

(function () {
    emailInput.addEventListener('blur' , validateEmail)	 
})();

//functions

function validateEmail(){
    if(this.value.includes('@')){
      this.parentElement.style.borderColor = "white";
    }
    else{
        this.parentElement.style.borderColor = "red";  
    }
}