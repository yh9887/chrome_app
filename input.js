
const loginForm= document.querySelector('#login-form')
const loginInput = document.querySelector("#login-form input")
// const loginButton = document.querySelector("#login-form button")

function onLoginSubmit(event){
    event.prevenDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    document.write = "Hello" + username
}

loginForm.addEventListener('submit',onLoginSubmit)

onLoginSubmit()
