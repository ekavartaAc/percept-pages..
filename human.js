document.querySelectorAll('.scroll-btn, .enroll-btn').forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Get the modal
const modal = document.getElementById("paymentModal");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal(trainingName, earlyBirdFee, regularFee, groupDiscountFee) {
    document.getElementById("trainingName").innerText = trainingName;
    document.getElementById("earlyBirdFee").innerText = earlyBirdFee;
    document.getElementById("regularFee").innerText = regularFee;
    document.getElementById("groupDiscountFee").innerText = groupDiscountFee;

    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Add event listeners to the "Enroll Now" buttons
document.querySelectorAll('.enroll-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        const featureCards = document.querySelectorAll('.feature-card');
        const earlyBirdFee = featureCards[index].querySelector('ul li:first-child strong').innerText || "N/A";
        const regularFee = featureCards[index].querySelector('ul li:nth-child(2) strong').innerText || "N/A";
        const groupDiscountFee = featureCards[index].querySelector('ul li:last-child strong').innerText || "N/A";
        openModal(featureCards[index].querySelector('h3').innerText, earlyBirdFee, regularFee, groupDiscountFee);
    });
});
function openPopup(course) {
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('popup-title').innerText = `Enroll Now - ${course}`;
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function openPopup(course) {
    document.getElementById('course-title').innerText = course;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
