// add nav-open class to open the nav list using the toggle method:
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// remove nav-open class to close the list using the classList remove method:
navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        document.body.classList.remove('nav-open');
    })
})

