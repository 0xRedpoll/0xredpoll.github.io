'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');
const darkThemeObjects = document.querySelectorAll('.dark-theme');


for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    // var logotext = $('.logo-text-redpoll');
    // var initialcontext = $('.initial-content');
    // document.body.classList.toggle('light-theme');
    // document.body.classList.toggle('dark-theme');
    // logotext.toggleClass("dark-theme");
    // logotext.toggleClass("light-theme");
    // initialcontext.toggleClass("dark-theme");
    // initialcontext.toggleClass("light-theme");

    var node1=document.getElementById('theme_source');
    var node2=document.getElementById('theme_source_2');
    if(node1.getAttribute('rel')=='stylesheet')
        {
            node1.setAttribute('rel', 'stylesheet alternate'); 
            node2.setAttribute('rel', 'stylesheet');
            sessionStorage.setItem('theme', 'dark');
        }
    else
        {
            node2.setAttribute('rel', 'stylesheet alternate'); 
            node1.setAttribute('rel', 'stylesheet');
            sessionStorage.setItem('theme', 'light');
        }


    for (let i =0; i < darkThemeObjects.length; i++){
        darkThemeObjects[i].classList.toggle('dark-theme');
        darkThemeObjects[i].classList.toggle('light-theme');
    }
    

    for (let i = 0; i < themeBtn.length; i++) {

      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');

    }

  })

}