// --- Menu close open hamburger ---

const mainNav = document.querySelector('.main-nav')
const hamburgerBtn = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.close-btn')
const navList = document.querySelector('.main-nav__list')
const navLinks = document.querySelectorAll('.main-nav__item')
const sections = document.querySelectorAll('.page-item')

hamburgerBtn.addEventListener('click', () => {
	mainNav.classList.add('open-menu')
	navList.classList.add('main-nav__list-visible')
})

closeBtn.addEventListener('click', () => {
	mainNav.classList.remove('open-menu')
	navList.classList.remove('main-nav__list-visible')
})

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		mainNav.classList.remove('open-menu')
		navList.classList.remove('main-nav__list-visible')
	})
})

document.addEventListener('click', e => {
	if (mainNav.classList.contains('open-menu')) {
		if (!navList.contains(e.target) && !hamburgerBtn.contains(e.target)) {
			mainNav.classList.remove('open-menu')
			navList.classList.remove('main-nav__list-visible')
		}
	}
})

// --- Scroll spy ---

const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.5,
}

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const sectionId = entry.target.getAttribute('id')
			navLinks.forEach(link => {
				link.classList.remove('active')
			})
			const activeLink = document.querySelector(`.main-nav__item[href="#${sectionId}"]`)
			if (activeLink) {
				activeLink.classList.add('active')
			}
		}
	})
}, options)

sections.forEach(section => {
	observer.observe(section)
})
