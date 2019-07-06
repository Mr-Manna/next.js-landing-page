window.onload=()=>{
//     const menu = document.querySelector('.menu');
//     const close = document.querySelector('.close');
//     menu.addEventListener('click',()=>{
//         document.querySelector('.navigation').classList.remove("display");
//         document.querySelector('.close').classList.remove("display");
//         document.querySelector('.menu').classList.add("display");
//     })

//     close.addEventListener('click',()=>{
//         document.querySelector('.navigation').classList.add("display");
//         document.querySelector('.close').classList.add("display");
//         document.querySelector('.menu').classList.remove("display");
//     })
    const hostname = window.location.hostname;
    const location = window.location.pathname ;
    var page = '/contact';
    if(window.location.pathname == page){
        console.log('got it');
        document.querySelector('.menu-home').classList.remove("display");
        document.querySelector('.menu-contact-us').classList.add("display");
    }

}