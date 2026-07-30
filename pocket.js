// Select all navigation links

let links = document.querySelectorAll("nav a");

// Add click event

links.forEach(function(link){

    link.onclick = function(e){

        e.preventDefault();

        let section = document.querySelector(this.getAttribute("href"));

        section.scrollIntoView({
            behavior: "smooth"
        });

    };

});
