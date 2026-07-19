// ==============================
// Smooth Scroll
// ==============================

const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({

            behavior: 'smooth'

        });

    });

});


// ==============================
// Sticky Navbar Shadow
// ==============================

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 30){

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.10)";

        header.style.background = "#fffdf9";

    }

    else{

        header.style.boxShadow = "none";

        header.style.background = "#fffdf9";

    }

});


// ==============================
// Active Navigation
// ==============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});


// ==============================
// Fade Animation on Scroll
// ==============================

const allSections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.2

});

allSections.forEach(section=>{

    observer.observe(section);

});


// ==============================
// Welcome Message
// ==============================

window.onload = function(){

    console.log("Welcome to Porna's Portfolio!");

};