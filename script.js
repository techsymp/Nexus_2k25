let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navbarLinks = document.querySelectorAll('.navbar a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x'); 
    });
});


window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

function countdownToEvent(eventDate) {
    let countdownElement = document.getElementById('countdown');

    function updateTimer() {
        let now = new Date().getTime();
        let timeLeft = eventDate - now;

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            countdownElement.textContent = "Event started!";
        }
    }

    updateTimer(); // Initial call
    let timer = setInterval(updateTimer, 1000);
}

// Set countdown to a specific date (YYYY, MM (0-based), DD, HH, MM, SS)
countdownToEvent(new Date(2025, 2, 28, 0, 0, 0).getTime());  // March 15, 2025, 6:00 PM

window.onload = function () {
    setTimeout(() => {
        document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
    }, 100); // Small delay to ensure page loads properly
};


// Show popup when button is clicked
document.getElementById("rules-btn1").addEventListener("click", function() {
    document.getElementById("rules1").style.display = "block";
});

document.getElementById("closePopup1").addEventListener("click", function() {
    document.getElementById("rules1").style.display = "none";
});

/* Close popup when clicking outside content */
window.addEventListener("click", function(event) {
    let popup = document.getElementById("rules1");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
// Show popup when button is clicked
document.getElementById("rules-btn2").addEventListener("click", function() {
    document.getElementById("rules2").style.display = "block";
});

document.getElementById("closePopup2").addEventListener("click", function() {
    document.getElementById("rules2").style.display = "none";
});

/* Close popup when clicking outside content */
window.addEventListener("click", function(event) {
    let popup = document.getElementById("rules2");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
// Show popup when button is clicked
document.getElementById("rules-btn3").addEventListener("click", function() {
    document.getElementById("rules3").style.display = "block";
});

document.getElementById("closePopup3").addEventListener("click", function() {
    document.getElementById("rules3").style.display = "none";
});

/* Close popup when clicking outside content */
window.addEventListener("click", function(event) {
    let popup = document.getElementById("rules3");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
// Show popup when button is clicked
document.getElementById("rules-btn4").addEventListener("click", function() {
    document.getElementById("rules4").style.display = "block";
});

document.getElementById("closePopup4").addEventListener("click", function() {
    document.getElementById("rules4").style.display = "none";
});

/* Close popup when clicking outside content */
window.addEventListener("click", function(event) {
    let popup = document.getElementById("rules4");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
// Show popup when button is clicked
document.getElementById("rules-btn5").addEventListener("click", function() {
    document.getElementById("rules5").style.display = "block";
});

document.getElementById("closePopup5").addEventListener("click", function() {
    document.getElementById("rules5").style.display = "none";
});

/* Close popup when clicking outside content */
window.addEventListener("click", function(event) {
    let popup = document.getElementById("rules5");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
// Show popup when button is clicked
document.getElementById("rules-btn6").addEventListener("click", function() {
    document.getElementById("rules6").style.display = "block";
});

document.getElementById("closePopup6").addEventListener("click", function() {
    document.getElementById("rules6").style.display = "none";
});

/* Close popup when clicking outside content */
window.addEventListener("click", function(event) {
    let popup = document.getElementById("rules6");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
// Show popup when button is clicked
document.getElementById("rules-btn7").addEventListener("click", function() {
    document.getElementById("rules7").style.display = "block";
});

document.getElementById("closePopup7").addEventListener("click", function() {
    document.getElementById("rules7").style.display = "none";
});

/* Close popup when clicking outside content */
window.addEventListener("click", function(event) {
    let popup = document.getElementById("rules7");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
// Show popup when button is clicked
document.getElementById("rules-btn8").addEventListener("click", function() {
    document.getElementById("rules8").style.display = "block";
});

document.getElementById("closePopup8").addEventListener("click", function() {
    document.getElementById("rules8").style.display = "none";
});

/* Close popup when clicking outside content */
window.addEventListener("click", function(event) {
    let popup = document.getElementById("rules8");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
// Show popup when button is clicked
document.getElementById("rules-btn9").addEventListener("click", function() {
    document.getElementById("rules9").style.display = "block";
});

document.getElementById("closePopup9").addEventListener("click", function() {
    document.getElementById("rules9").style.display = "none";
});

/* Close popup when clicking outside content */
window.addEventListener("click", function(event) {
    let popup = document.getElementById("rules9");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
// Show popup when button is clicked
document.getElementById("rules-btn10").addEventListener("click", function() {
    document.getElementById("rules10").style.display = "block";
});

document.getElementById("closePopup10").addEventListener("click", function() {
    document.getElementById("rules10").style.display = "none";
});

/* Close popup when clicking outside content */
window.addEventListener("click", function(event) {
    let popup = document.getElementById("rules10");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
// Show popup when button is clicked
document.getElementById("rules-btn11").addEventListener("click", function() {
    document.getElementById("rules11").style.display = "block";
});

document.getElementById("closePopup11").addEventListener("click", function() {
    document.getElementById("rules11").style.display = "none";
});

/* Close popup when clicking outside content */
window.addEventListener("click", function(event) {
    let popup = document.getElementById("rules11");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
// Show popup when button is clicked
document.getElementById("rules-btn12").addEventListener("click", function() {
    document.getElementById("rules12").style.display = "block";
});

document.getElementById("closePopup12").addEventListener("click", function() {
    document.getElementById("rules12").style.display = "none";
});
/* Close popup when clicking outside content */
window.addEventListener("click", function(event) {
    let popup = document.getElementById("rules12");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
document.getElementById("rules-btn13").addEventListener("click", function() {
    document.getElementById("rules13").style.display = "block";
});

document.getElementById("closePopup13").addEventListener("click", function() {
    document.getElementById("rules13").style.display = "none";
});

/* Close popup when clicking outside content */
window.addEventListener("click", function(event) {
    let popup = document.getElementById("rules13");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
document.getElementById("pay1").addEventListener("click", function() {
    window.open("https://docs.google.com/forms/d/19cRi_oE5nJwLQb3tnHRbuZqqcrEaGfpO8bOxEwz9lEI/edit?ts=67cddb51", "_blank"); // Opens in a new tab
});
document.getElementById("pay2").addEventListener("click", function() {
    window.open("https://docs.google.com/forms/d/100icOo1_VEeYg4nr1DuHVc9S8RG8WMEbu5xcWBUNeBo/edit?ts=67cddca5", "_blank"); // Opens in a new tab
});
document.getElementById("pay3").addEventListener("click", function() {
    window.open("https://docs.google.com/forms/d/18AFFJyJnQ2WMhCwuKBoE6CQ5JkvfaLi5zBwCAvZ0dcM/edit?ts=67cdd6cc&pli=1", "_blank"); // Opens in a new tab
});
document.getElementById("pay4").addEventListener("click", function() {
    window.open("https://forms.gle/2KtVb6SH3C5fGTJv8", "_blank"); // Opens in a new tab
});
document.getElementById("pay5").addEventListener("click", function() {
    window.open("https://forms.gle/ZEW27YbG7U6xruTe9", "_blank"); // Opens in a new tab
});
document.getElementById("pay6").addEventListener("click", function() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdnifNkKHO0jGEeYK1jdrr3K3_cRiDNWn6w9tlwxL07fOD1zg/viewform?usp=sharing", "_blank"); // Opens in a new tab
});
document.getElementById("pay7").addEventListener("click", function() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSe8olF8Q7BMqPQE21XZ6_td1FY8c_aCCW4LeQVqLYWrfHrFhA/viewform?usp=sharing", "_blank"); // Opens in a new tab
});
document.getElementById("pay8").addEventListener("click", function() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSduNAZL24Do2jXR_Debtc6DQE7f2wW7b8SDom31j6skScLd_g/viewform?usp=sharing", "_blank"); // Opens in a new tab
});
document.getElementById("pay9").addEventListener("click", function() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdoEnuxY7fPms-aF_ZTNIn0wkXPXzZ-dEssQZf5WNinvtwmOw/viewform?usp=sharing", "_blank"); // Opens in a new tab
});
document.getElementById("pay10").addEventListener("click", function() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdXbn9u8M6yJiehoLPaUpu33MtFdurwZJDxgpamWCxffunspg/viewform?usp=sharing", "_blank"); // Opens in a new tab
});
document.getElementById("pay11").addEventListener("click", function() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfCEm7qGpL0WRdOqajoJRFk6k49NhzY0UclVAsOjLvOQ5GYAg/viewform?usp=sharing", "_blank"); // Opens in a new tab
});