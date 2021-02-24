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
 * Define Global Variables
 * 
*/
let updateMenu = document.querySelector('#navbar__list');
let sectionHeadings = document.querySelectorAll('[data-nav]');
let linkClass = 'menu__link';
let btnTop = document.querySelector('.btn-top');


// }



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function displayButton(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        btnTop.style.display = 'block';
    } else {
        btnTop.style.display = 'none';
    }
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function getMenuContent() {
    let fragment = new DocumentFragment();

    sectionHeadings.forEach(sectionHeading => {
        let menuItem = document.createElement('li');
        let menuLink = document.createElement('a');
        menuLink.setAttribute('href', `#${sectionHeading.id}`);
        menuLink.className = linkClass;
        menuLink.append(sectionHeading.dataset.nav);
        menuItem.append(menuLink);
        fragment.append(menuItem);

    });
    
    // for(let i = 0; i < sectionHeadings.length; i++) {
    //     let menuItem = document.createElement('li');
    //     let menuLink = document.createElement('a');
    //     menuLink.setAttribute('href', "#"+sectionHeadings[i].id);
    //     menuLink.className = linkClass;
    //     menuLink.append(sectionHeadings[i].dataset.nav);
    //     menuItem.append(menuLink);
    //     fragment.append(menuItem);       
    // }
    return fragment;
}

updateMenu.append(getMenuContent());
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

// Scroll to Top scrollTO event
let gotoTop=()=>document.documentElement.scrollTop = 0;
// function gotoTop(){
    //     document.documentElement.scrollTop = 0;
    // };

/**
 * End Main Functions
 * Begin Events
 * 
*/
btnTop.addEventListener('click', gotoTop);
window.addEventListener('scroll', function(){
    displayButton();
    isActive();
});
// Build menu 

// Scroll to section on link click

// Set sections as active
function isActive(){
    sectionHeadings.forEach(sectionHeading => {
        let sectionHeadingPos = sectionHeading.offsetTop;
        sectionHeading.classList.toggle("your-active-class", window.scrollY  >= sectionHeadingPos);
    });
}

