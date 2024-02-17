let userNameInput = document.getElementById('userNameInput')
let emailInput = document.getElementById('emailInput')
let passwordInput = document.getElementById('passwordInput')
let signUpBtn = document.getElementById('signUpBtn')
let alertMessage=document.getElementById('message')
let userList = [];


if (localStorage.getItem('users') != null) {
    userList = JSON.parse(localStorage.getItem("users"))
}

function signUp() {
    let userAccount = {
        name: userNameInput.value,
        email: emailInput.value,
        pasword: passwordInput.value
    }
    if (checkInput() == true) {
        getAlert('All Inputs Required', 'red');
    }
    else {
        if(checkEmailExist() == true)
        {
            getAlert('Email Already Exist', 'red');
        }
        else
        {
            userList.push(userAccount);
            localStorage.setItem('users', JSON.stringify(userList));
            clear();
            getAlert('Success', 'green');
            console.log(userList);
        }
    }
}

function getAlert(text , color) {
    alertMessage.classList.replace('d-none','d-block')
    alertMessage.innerHTML=text;
    alertMessage.style.color=color;
}


function clear() {
    userNameInput.value = ""
    emailInput.value = ""
    passwordInput.value = ""
}

function checkInput() {
    if (userNameInput.value == '' || emailInput.value == '' || passwordInput.value == '')
    
        return true
        else
        return false

}

function checkEmailExist() {
    for (var i = 0; i < userList.length; i++) {
        if (userList[i].email == emailInput.value)
            return true;
    }
}
signUpBtn.addEventListener('click', signUp)
console.log(userList);
