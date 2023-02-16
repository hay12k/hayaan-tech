let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
    signupform.classList.remove('active');
    forgetform.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginform.classList.remove('active');
    forgetform.classList.remove('active');
    signupform.classList.remove('active');
    navbar.classList.remove('active');
}

let loginform = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');
    signupform.classList.remove('active');
    forgetform.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}


let signupform = document.querySelector('.signup-form');

document.querySelector('#signup-btn').onclick = () =>{
    signupform.classList.toggle('active');
    loginform.classList.remove('active');
    forgetform.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let forgetform = document.querySelector('.forget-form');

document.querySelector('#forget-btn').onclick = () =>{
    forgetform.classList.toggle('active');
    loginform.classList.remove('active');
    signupform.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#manu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    signupform.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
    forgetform.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    signupform.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
    forgetform.classList.remove('active');
    navbar.classList.remove('active');
}