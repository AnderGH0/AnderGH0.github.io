let username = document.querySelector('.username'),
    email = document.querySelector('.email'),
    password = document.querySelector('.password'),
    confirmPassword = document.querySelector('.confirmPassword');

const userRegex  = /[a-z]/g,
        emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const submit = document.querySelector(".submit-btn");

submit.addEventListener("click", (e) => {
    //username
    e.preventDefault();
    if(username.value.length < 5 || username.value.length > 10 || !userRegex.test(username.value)) {
        username.style.border = '1px solid red';
        document.querySelector('.user-msg').classList.remove('hidden');
    } else if(username.value.length >= 5 && username.value.length <= 10 && userRegex.test(username.value)) {
        username.style.border = 'none';
        username.style.border = '1px solid green';
        if(!document.querySelector('.user-msg').classList.contains('hidden')){
            document.querySelector('.user-msg').classList.add('hidden');
        }
    }
    if(!emailRegex.test(email.value)){
        email.style.border = '1px solid red';
        document.querySelector('.email-msg').classList.remove('hidden');
    } else if(emailRegex.test(email.value)){
        email.style.border = 'none';
        email.style.border = '1px solid green';
        if(!document.querySelector('.email-msg').classList.contains('hidden')){
            document.querySelector('.email-msg').classList.add('hidden');
        }
    } 
    if(password.value.length < 8 || password.value.length > 10){
        password.style.border = '1px solid red';
        document.querySelector('.password-msg').classList.remove('hidden');
    } else if(password.value.length >= 8 && password.value.length <= 10){
        password.style.border = 'none';
        password.style.border = '1px solid green';
        if(!document.querySelector('.password-msg').classList.contains('hidden')){
            document.querySelector('.password-msg').classList.add('hidden');
        }
    }
    if(confirmPassword.value !== password.value || confirmPassword.value.length < 8 || confirmPassword.value.length > 10) {
        confirmPassword.style.border = '1px solid red';
        document.querySelector('.confirm-msg').classList.remove('hidden');
    } else if(confirmPassword.value === password.value && password.value.length >= 8 && password.value.length <= 10){
        confirmPassword.style.border = 'none';
        confirmPassword.style.border = '1px solid green';
        if(!document.querySelector('.confirm-msg').classList.contains('hidden')){
            document.querySelector('.confirm-msg').classList.add('hidden');
        }
    }
});


