document.addEventListener("DOMContentLoaded", function() {
    
    // Smooth scrolling link behavior
    const links = document.querySelectorAll("nav ul li a");
    
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            
            if(targetId.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // Contact form processing
    const contactForm = document.getElementById("quickContactForm");
    if(contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const contactInput = document.getElementById("parentContact").value;
            
            if(contactInput.trim() !== "") {
                alert(`Placement inquiry submitted!\nLotuke Seed Secondary School administrative registry has saved your phone number: ${contactInput}.`);
                contactForm.reset();
            } else {
                alert("Please enter a valid phone number before submitting.");
            }
        });
    }
});