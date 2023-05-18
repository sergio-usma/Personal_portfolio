
const form = document.querySelector('form');
const fullName = document.querySelector('#full-name');
const email = document.querySelector('#email-mobile');


// Show input error message
function showError(input, message) {
    //
    
   

}

// Show input success Outline
function showSuccess(input, message) {
   
    
    
}


// Check email is Valid
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
    
  };



  // Check required fields
function checkRequired(inputArr) {
   

}

// Event Listeners
//we need to add an eventListener when we submit the form
form.addEventListener('submit', function(e) {
    e.preventDefault();
   
    

})