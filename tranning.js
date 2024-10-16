// IT Domains to be displayed as cards
const trainingPrograms = [
    { name: "Advanced Java", description: "Master advanced Java concepts for enterprise apps.", brochureLink: "#", enrollLink: "#" },
    { name: "AI & Machine Learning", description: "Learn AI and ML, and build intelligent apps.", brochureLink: "#", enrollLink: "#" },
    { name: "Android Development", description: "Develop native Android apps using Java/Kotlin.", brochureLink: "#", enrollLink: "#" },
    { name: "AngularJS", description: "Build dynamic web apps with AngularJS.", brochureLink: "#", enrollLink: "#" },
    { name: "Automation", description: "Automate workflows with modern tools.", brochureLink: "#", enrollLink: "#" },
    { name: "AWS Cloud Computing", description: "Learn cloud infrastructure using AWS.", brochureLink: "#", enrollLink: "#" },
    { name: "C++ Programming", description: "Master C++ programming from basics to advanced.", brochureLink: "#", enrollLink: "#" },
    { name: "Data Analysis", description: "Analyze data with modern tools.", brochureLink: "#", enrollLink: "#" },
    { name: "Data Science", description: "Learn Data Science with Python and ML.", brochureLink: "#", enrollLink: "#" },
    { name: "Digital Marketing", description: "Master SEO, SEM, and Social Media Marketing.", brochureLink: "#", enrollLink: "#" },
    { name: "Django & Angular", description: "Build full-stack apps with Django and Angular.", brochureLink: "#", enrollLink: "#" },
    { name: ".NET Framework", description: "Develop robust apps using .NET Framework.", brochureLink: "#", enrollLink: "#" },
];

// Function to dynamically generate cards
const cardContainer = document.querySelector('.card-container');

function generateCards() {
    trainingPrograms.forEach(program => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h3>${program.name}</h3>
            <p>${program.description}</p>
            <div class="buttons">
                <a href="${program.brochureLink}" class="download-btn">Download Brochure</a>
                <a href="${program.enrollLink}" class="enroll-btn">Enroll Now</a>
            </div>
        `;
        cardContainer.appendChild(card);
    });
}

generateCards();
