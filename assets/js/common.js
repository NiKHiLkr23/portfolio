/*=============== Show Menu =============== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
            
/*===== Menu Show =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== Remove Menu Mobile =============== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    //when we click on each link, we remove the show menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach((n) => n.addEventListener('click', linkAction))

        // to close menu when clicked outside nav-links; for smaller devices
navMenu.addEventListener('click', linkAction)


// /*=============== Background Header =============== */
const header = document.getElementById('header');

function scrollHeader() {
    //when the scroll is greater than 50 viewport height, add the scroll-header class to header tag
    if (this.scrollY > 50 )header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader)

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}



/*=============== Contact Form =============== */
const contactForm = document.getElementById('contact-form'),
        contactName = document.getElementById('contact-name'),
        contactEmail = document.getElementById('contact-email'),
        Message = document.getElementById('message'),
        contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    //check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || Message.value === '') {

        contactMessage.classList.remove('color-sent');
        contactMessage.classList.add('color-error');

        //show message
        contactMessage.textContent = 'Please fill all the details. Thankyou!';
        } else{
            //serviceID - templateID - #form - publickey
            emailjs.sendForm(
                '', //add serviceID here inside quotes
                '', //add templateID here inside quotes
                '#contact-form',
                ''  //add publicKey here inside quotes
            ).then(() => {
                //show message and add color
                contactMessage.classList.add('color-sent');
                contactMessage.textContent = ' Message Sent ✔';

                //remoce message after 5 seconds
                setTimeout(() => {
                    contactMessage.textContent ='';
                },3000);
            },(error) => {
                
                contactMessage.classList.add('color-error');
                contactMessage.textContent = 'Something Went Wrong!';
            }
            );

            //clear input fields
            contactName.value = '';
            contactEmail.value='';
            Message.value = '';

        }
};

contactForm.addEventListener('submit', sendEmail);


/*=============== Style Switcher =============== */

const styleSwitcherToggle = document.querySelector('.style__switcher-toggler'),
    styleSwitcher = document.querySelector('.style__switcher');

    styleSwitcherToggle.addEventListener('click', () => {
        styleSwitcher.classList.toggle('open');
    })

    //hide switcher on scroll

    window.addEventListener('scroll', () => {
        if (styleSwitcher.classList.contains('open')) {
                styleSwitcher.classList.remove('open');
        }
    })

    const alternateStyles = document.querySelectorAll('.alternate-style');

    function setActiveStyle(color){
        alternateStyles.forEach((style) => {
            if (color === style.getAttribute('title')) {
                style.removeAttribute('disabled');
            } else{
                style.setAttribute('disabled','true');
            }
        });
    }

