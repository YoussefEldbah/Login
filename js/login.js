let signEmailInput = document.getElementById('signEmail');
let signPassword = document.getElementById('signPassword');
// console.log(signPassword);
let alertMessage = document.getElementById('message')
let loginBtn = document.getElementById('loginBtn');
let userList = [];
if (localStorage.getItem('users') != null) {
    userList = JSON.parse(localStorage.getItem("users"))
}



function login() {
    if (checkInput() == true) {
        getAlert('All inputs is required', 'red')

    } else {
        if (ckeckEmailPass() == true) {
            window.location.href = 'home.html';
        } else {
            getAlert('incorrect email or password', 'red')
        }
    }


}

function ckeckEmailPass() {
    for (let i = 0; i < userList.length; i++) {
        if (signEmailInput.value == userList[i].email && signPassword.value == userList[i].pasword) {
            localStorage.setItem('userName', userList[i].name)
            return true

        }
    }

}
function checkInput() {
    if (signEmailInput.value == '' || signPassword.value=='')

        return true
    else
        return false

}
function getAlert(text, color) {
    alertMessage.classList.replace('d-none', 'd-block')
    alertMessage.innerHTML = text;
    alertMessage.style.color = color;
}

loginBtn.addEventListener('click', login)
