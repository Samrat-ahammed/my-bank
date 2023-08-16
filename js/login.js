// add event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
// get the email address inside the email input field
const emailField = document.getElementById('user-email');
const email = emailField.value;
// console.log(email);

// get password in password field
 const passwordField = document.getElementById('user-password');
 const password = passwordField.value;

// go to another page
window.location.href = 'bank.html'
alert('login success');
//  console.log(password);

// verify email and password

// if(email==='samrat@gmail.com' && password === 12345){
//     console.log('valid user');
// }else{
    // alert('invalid user');
// }

});