
// chat gpt 
// Toggle the menu open/close states
// document.getElementById("menu-icon").addEventListener("click", function() {
//     var nav = document.getElementById("nav");
//     nav.classList.toggle("menu-open");
// });

// my create

//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// scroll Selection

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight
        let id = sec.scrollHeight('id');


        if(top => offset && top < offset + height){
            // active navbar links
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }) ;
            // active section animated for scroll
            sec.classList.add('show-animate')   
        }

        // use animation repeate and scroll these
        else{
            sec.classList.remove('show-animate') 
        }
    })
    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}  


// vedant

// const menuIcon =document.getElementById('menu-icon');
// const navbar = document.getElementById('nav');
// const crossbar = document.getElementById('cross');
// if(menuIcon){
//     menuIcon.addEventListener('click',()=>{
//         navbar.classList.add('active');
//     })
// }
// if(cross){
//     crossbar.addEventListener('click',()=>{
//         navbar.classList.remove('active');
//     })
// }

