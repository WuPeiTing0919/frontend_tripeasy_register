import * as func from './function.js';

const lang_toggle = document.querySelector('.lang_toggle');
const selects = document.querySelectorAll('.select-box');

const signUpName = document.querySelector('input[type="text"]');
const signUpEmail = document.querySelector('input[type="email"]');
const signUpPwd = document.querySelector('input[type="password"]');
const signUpPwd_Eye = document.querySelector('.fa-eye-slash');
const signUpBtn = document.querySelector('.submit_btn');

lang_toggle.addEventListener('click',() =>{
    const options = lang_toggle.querySelectorAll('.lang_option');
    options.forEach(option => option.classList.toggle('active'));
});

selects.forEach(select => {
    select.addEventListener('change',() => {
        func.updateOptions(selects);
    });
});

signUpPwd_Eye.addEventListener('click',() => {
    func.passwordShow(signUpPwd ,signUpPwd_Eye)
});


