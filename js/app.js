/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
*/
//for responsive header in small screen
let en = 1 ;

//styling
let sty = document.createElement('style');
const he = document.querySelector('head');
he.appendChild(sty);
//header{display : flex ;flex-direction: column} main {padding-top: 15em; margin-top: 15em} section{margin-top: 15em}.active {background-color : black ;transition: 0.5s ease;transform: scale(1.2,1.2)}



// Build menu 
const navUl = document.querySelector('#navbar__list');
navUl.style.cssText=' background-color: rgb(239, 235, 230); display : flex ; justify-content: flex-end ; align-items: center ; padding : 5px';

for (let i = 0 ; i <=((document.querySelectorAll('section')).length) ; i++){
    navUl.appendChild(document.createElement('li')).appendChild(document.createElement('a'));
}

const anchars = navUl.querySelectorAll('a');
const lists = navUl.querySelectorAll('li');

for (let i = 0 ; i <=((document.querySelectorAll('section')).length) ; i++){
    let q=i+1;
    lists[i].style.cssText='border-radius: 35px ; margin-right : 10px';
    lists[i].classList.add('menu__link');
    anchars[i].innerHTML =('Section '+q);
    anchars[i].setAttribute('id',('list'+q));
    anchars[i].style.cssText='padding : 10px ;color: rgb(100, 190, 160); text-decoration: none';
    anchars[i].setAttribute('href',('#section'+q));
    
}


// Scroll smoth to section on link click
//var as =navul.querySelectorAll('a');
for (let x =0 ; x<=((document.querySelectorAll('section')).length);x++){
    anchars[x].addEventListener('click',function(event){
        event.preventDefault();
        (document.querySelectorAll('section'))[x].scrollIntoView({
            behavior:"smooth"
        })
        sty.textContent=' @media (max-width:641px){.navbar__menu{display : none} }';
        en=1;
        }
        
    )
}


//adding new section 
const oldsection = document.getElementById('section2');
const main =document.querySelector('main');
const newsection = document.createElement('section');
newsection.setAttribute('id','section4');
newsection.innerHTML= oldsection.innerHTML;
main.appendChild(newsection);
newsection.querySelector('h2').textContent=('Section 4');
newsection.querySelector('div').classList.add('landing__container');




// Set sections as active
const sections = document.querySelectorAll('section');
function activeMenu(){
    for (let i = 0; i < sections.length; i++) {
        const sectionTop= sections[i].getBoundingClientRect().top;
        if (sectionTop<200 && sectionTop>-300) {
            sections[i].classList.add('your-active-class');
            lists[i].classList.add('active');
        } else {
            sections[i].classList.remove('your-active-class');
            lists[i].classList.remove('active');
        }
    }
}    
activeMenu();
window.addEventListener('scroll',activeMenu);


//for responsive header in small screen
document.querySelector('i').addEventListener('click',function(event){
    if(en){
        sty.textContent=' @media (max-width:641px){.navbar__menu{display : flex ;flex-direction: column} }';
    }
    else{
        sty.textContent=' @media (max-width:641px){.navbar__menu{display : none} }';
    }
   en=!en;  
})
