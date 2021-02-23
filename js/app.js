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


// }



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

function getMenuContent() {
    let fragment = new DocumentFragment();

    sectionHeadings.forEach(sectionHeading => {
        let menuItem = document.createElement('li');
        let menuLink = document.createElement('a');
        menuLink.setAttribute('href', "#"+sectionHeading.id);
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


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


