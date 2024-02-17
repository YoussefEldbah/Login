let logBtn=document.getElementById('logBtn')
let welcomeMessge= document.getElementById('welcomeMessge')
if (localStorage.getItem('users') != null) {
    welcomeMessge.innerHTML=`Welcome ${ localStorage.getItem('userName')}`
}
function logOut() {
    window.location.href='index.html'
    localStorage.removeItem('userName')
}
logBtn.addEventListener('click',logOut)