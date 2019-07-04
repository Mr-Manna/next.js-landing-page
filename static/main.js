window.onload=()=>{
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.close');
    menu.addEventListener('click',()=>{
        document.querySelector('.navigation').classList.remove("display");
        document.querySelector('.close').classList.remove("display");
        document.querySelector('.menu').classList.add("display");
    })

    close.addEventListener('click',()=>{
        document.querySelector('.navigation').classList.add("display");
        document.querySelector('.close').classList.add("display");
        document.querySelector('.menu').classList.remove("display");
    })
}