/*=============== MenuToogle ===============*/
let toggle = document.querySelector('.toggle');
let nav__menu = document.querySelector('.nav__menu');
let main = document.querySelector('.main');

toggle.onclick = function(){
	nav__menu.classList.toggle('active');
	main.classList.toggle('active');
	}
/*=============== Hovered ===============*/
let list = document.querySelectorAll('.nav__menu li');
function activeLink(){
	list.forEach((item) =>
	item.classList.remove('hovered'));
	this.classList.add('hovered');
	}
	list.forEach((item) =>
	item.addEventListener('mouseover',activeLink));
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SERVICES MODEL ===============*/
const	modelViews = document.querySelectorAll('.services__model'),
		modelBtns = document.querySelectorAll('.services__button'),
		modelClose = document.querySelectorAll('.services__model-close')
		
let model = function(modelClick){
	modelViews[modelClick].classList.add('active-model')
	}
modelBtns.forEach((mb, i) =>{
	mb.addEventListener('click', () =>{
		model(i)
	})
})

modelClose.forEach((mc) =>{
	mc.addEventListener('click', () =>{
		modelViews.forEach((mv) =>{
			mv.classList.remove('active-model')
		})
	})
})
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
})
/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
	linkWork.forEach(l=> 1.classList.remove('active-work'))
	this.classList.add('active-work')
}
linkWork.forEach(l= 1.addEventListener('click', activeWork))
/*=============== SWIPER TESTIMONIAL ===============*/
      let swiperTestimonial = new Swiper(".testimonial__container", {
        grabCursor: true,
		loop: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        },
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
      })
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-moon'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/



