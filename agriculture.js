//CONTACT PAGE
function openExternalContact() {
    window.location.href = "contact.html";
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();

    if (name === "") {
        alert("Please enter your name.");
    } else {
        alert("Thank you, " + name + "! Your message has been sent.");
        document.getElementById("contactForm").reset();
    }
});

//FOOTER
document.getElementById("year").textContent = new Date().getFullYear();

    document.getElementById("newsletterForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let email = document.getElementById("newsletterEmail").value.trim();

        if (email === "") {
            alert("Please enter a valid email.");
        } else {
            alert("Thank you for subscribing!");
            document.getElementById("newsletterForm").reset();
        }
    });

   //BLOG1 
   document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-box input");

    searchInput.addEventListener("focus", function () {
        this.style.border = "2px solid #66bb6a";
    });

    searchInput.addEventListener("blur", function () {
        this.style.border = "1px solid #4caf50";
    });

    const btn = document.querySelector(".author-bio .btn");
    btn.addEventListener("mouseover", function () {
        this.style.backgroundColor = "#2e7d32";
    });

    btn.addEventListener("mouseout", function () {
        this.style.backgroundColor = "#66bb6a";
    });
});