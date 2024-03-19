const form =document.getElementById('form');
const fname =document.getElementById('fname');
const lname =document.getElementById('lname');
const email =document.getElementById('email');
const password =document.getElementById('password');

form.addEventListener('submit', e =>{
    e.preventDefault();

    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(firstName === ''){
        errorFunc(fname, 'First Name cannot be empty')
    }
    else{
        successFunc(fname)
    }

    if(lastName === ''){
        errorFunc(lname, 'Last Name cannot be empty')
    }
    else{
        successFunc(fname)
    }

    if(emailValue === ''){
        errorFunc(email, 'Email Address cannot be empty')
    }
    else if(!emailValue.match(pattern)){
            errorFunc(email, 'This is not an email');
    }
    else{
        successFunc(fname)
    }

    if(passwordValue === ''){
        errorFunc(password, 'Password cannot be empty')
    }
    else{
        successFunc(fname)
    }
})

function errorFunc(req, message){
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.className += 'error';
    span.className += 'error-text';
    if( req !== email){
        req.value = '';
    }
    else{
        req.style.color = "hsl(0, 100%, 74%)";
    }
}


function successFunc(req){
    req.className += 'success';
}




