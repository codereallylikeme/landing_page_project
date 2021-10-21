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
const sections = document.querySelectorAll('section');
const navbar__list = document.querySelector('#navbar__list');




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
const buildNavigator = function(){
    for (const section of sections){
        const newEl = document.createElement('li');
        const sectionId = section.getAttribute('id');
        const sectionsDataset = section.getAttribute('data-nav');
        // Build menu 
        newEl.innerHTML = `<a class ='menu__link' href='#${sectionId}'>${sectionsDataset}</a>`

    navbar__list.appendChild(newEl);
    }
}
buildNavigator();

// Add class 'active' to section when near top of viewport
function isViewThere(){
    const navbarSectionLink = document.querySelectorAll('.menu__link')
   for(const section of sections){
        const sectionView = section.getBoundingClientRect();
        if(sectionView.top <= 150 && sectionView.bottom >= 150 ){
            // Set sections as active
          const id = section.getAttribute('id');
           document.querySelector(`#${id}`).classList.add('active');
            section.classList.add('your-active-class')
            //Highlight the nav
           navbarSectionLink.forEach(item=>{
            item.classList.remove('activate-nav');
            if(item.getAttribute('href') ==  `#${id}`){
                item.classList.add('activate-nav')
            }
        })
        
        
    } else{
        const id = section.getAttribute('id');
            document.querySelector(`#${id}`).classList.remove('active');
            section.classList.remove('your-active-class')
    }

    
    
      


 }

 
 
   
}

    window.addEventListener('scroll', function(){
        isViewThere();   });
        
// deactivate the default lick and add the section on link click
        function scrollView(){
            const menuClickNav= document.querySelectorAll('.menu__link')
            menuClickNav.forEach(item=>{
                item.addEventListener('click', (e)=>{
                   // console.log('hello')
                  e.preventDefault();
                  document.querySelector(item.getAttribute('href')).scrollIntoView({top:150,left:0,behavior:"smooth"});
                })
            })
        }
        scrollView();

        


    
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/





