let star_menubar = document.querySelector('.star_menubar');
document.querySelector('#menu-btn').onclick = () =>{
    star_menubar.classList.toggle('active');
}

window.onscroll = () =>{
    star_menubar.classList.remove('active');
}
    
