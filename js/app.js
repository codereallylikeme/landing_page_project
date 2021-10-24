// Define Global Variables/
const sections = document.querySelectorAll('section');
const navbar__list = document.querySelector('#navbar__list');

//End Global Variables

// build the nav
const buildNavigator = function () {
  for (const section of sections) {
    const newEl = document.createElement('li');
    const sectionId = section.getAttribute('id');
    const sectionsDataset = section.getAttribute('data-nav');
    // Build menu
    newEl.innerHTML = `<a class ='menu__link' href='#${sectionId}'>${sectionsDataset}</a>`;
    navbar__list.appendChild(newEl);
  }
};
buildNavigator();

// Add class 'active' to section when near top of viewport
function isViewThere() {
  const navbarSectionLink = document.querySelectorAll('.menu__link');
  for (const section of sections) {
    const sectionView = section.getBoundingClientRect();
    if (sectionView.top <= 150 && sectionView.bottom >= 150) {
      // Set sections as active
      const id = section.getAttribute('id');
      document.querySelector(`#${id}`).classList.add('active');
      section.classList.add('your-active-class');
      //Highlight the nav
      navbarSectionLink.forEach((item) => {
        item.classList.remove('activate-nav');
        if (item.getAttribute('href') == `#${id}`) {
          item.classList.add('activate-nav');
        }
      });
    } else {
      const id = section.getAttribute('id');
      document.querySelector(`#${id}`).classList.remove('active');
      section.classList.remove('your-active-class');
    }
  }
}
// I create a  scroll event
window.addEventListener('scroll', function () {
  isViewThere();
});

// deactivate the default lick and add the section on link click
function scrollView() {
  const menuClickNav = document.querySelectorAll('.menu__link');
  menuClickNav.forEach((item) => {
    item.addEventListener('click', (e) => {
      // console.log('hello')
      e.preventDefault();
      // Scroll to anchor ID using scrollIntoView event
      document
        .querySelector(item.getAttribute('href'))
        .scrollIntoView({ top: 150, left: 0, behavior: 'smooth' });
    });
  });
}
scrollView();

//End Main Functions
