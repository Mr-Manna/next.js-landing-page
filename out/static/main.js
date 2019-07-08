window.onload=()=>{
    "use strict";
    const location = window.location.pathname ;
    const menuHome = document.querySelector('.menu-home');
    const menuContactUs = document.querySelector('.menu-contact-us');
    const header = document.querySelector('header');

    var page = '/contact/';
    if( location == '/contact' | '/contact/' ){
        console.log('got it');
        menuHome.classList.remove("display");
        menuContactUs.classList.add("display");
    }
    document.addEventListener('scroll', ()=>{
        if( window.scrollX > 600 ){
            header.classList.add("header-shadow");
        }else if( window.scrollX < 600 ){
            header.classList.remove("header-shadow");
        }
    })
    console.log( location);
}