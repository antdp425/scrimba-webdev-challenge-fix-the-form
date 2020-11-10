/* 
PART 2: STRETCH GOAL

1. Validate that it's an email the user has entered
2. Give feedback as to whether the form was successfully submitted or not
3. Go crazy with the error/success feedback (e.g. animations, sounds)

*/

const email = document.getElementById("email-input")
const form = document.getElementById("myForm")
const error = document.getElementById("error")

form.addEventListener("submit", function(e) {
    e.preventDefault()
    validateEmail(e.target[0].value) ?
    thankYouForSubmitting() : 
    displayFormError()
})

function validateEmail(email){
   return !!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
}

function thankYouForSubmitting(){
   form.remove()
   document.body.innerHTML = `
      <h1>You're all set! :)</h1>
   `
}

function displayFormError(){
   email.style.border = "2px solid red"
   error.style.display = "block"
}