document.querySelectorAll('.feature-item').forEach(item => {
    item.addEventListener('click', function() {
        // Setting the title
        document.getElementById('modalTitle').innerText = "IT Training Programs - Comprehensive Overview";

        // Adding merged content description
        document.getElementById('modalDescription').innerText = 
            "Percept Infosystem Consultants offers a comprehensive range of IT training programs designed to equip individuals with the skills and knowledge needed to thrive in the tech industry. Our courses are tailored for both beginners and professionals, focusing on real-world applications and career growth.";

        // Adding detailed program offerings
        document.getElementById('modalAdditionalDetails').innerHTML = `
            <p><strong>Our Key Offerings:</strong></p>
            <ul>
                <li><strong>Professional IT Courses:</strong> Covering software development, data science, cybersecurity, cloud computing, and more. We ensure participants gain industry-relevant expertise in a variety of fields.</li>
                <li><strong>Internships:</strong> Hands-on internships provide practical experience, allowing learners to work on real IT projects with industry experts.</li>
                <li><strong>Placement Assistance:</strong> End-to-end support including resume building, interview preparation, and connections with top companies to help participants secure jobs after training.</li>
            </ul>
            <p><strong>In-Depth Training Areas:</strong></p>
            <ul>
                <li><strong>1. Software Development and Programming:</strong> Includes Python, Java, C++, JavaScript, frameworks like .NET and React, web and mobile development.</li>
                <li><strong>2. Networking and System Administration:</strong> Cisco certifications, cloud platforms like AWS and Azure, and system administration on Windows and Linux.</li>
                <li><strong>3. Cybersecurity:</strong> Security fundamentals, threat mitigation, and certifications like CompTIA Security+ and CISSP.</li>
                <li><strong>4. Data Science and Analytics:</strong> Data analysis with Excel, Power BI, SQL, machine learning, AI, and big data technologies.</li>
                <li><strong>5. Database Management:</strong> SQL and NoSQL databases, database design, and business intelligence tools like Tableau.</li>
                <li><strong>6. Cloud Computing and Virtualization:</strong> AWS, Azure, Google Cloud, and technologies like Docker and Kubernetes.</li>
                <li><strong>7. IT Support and Help Desk:</strong> Basics of troubleshooting, ITSM frameworks like ITIL, and tools for managing IT services.</li>
                <li><strong>8. Project Management and Agile:</strong> Training on PMP, Agile principles, Scrum framework, and certifications.</li>
                <li><strong>9. AI and Machine Learning:</strong> Machine learning algorithms, AI development, and deep learning with tools like TensorFlow and PyTorch.</li>
            </ul>
            <p>At Percept Infosystem, we are committed to enhancing skills, providing practical experience, and fostering career success in the competitive IT industry.</p>
        `;

        // Show the modal
        document.getElementById('featureModal').style.display = 'flex';
    });
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('featureModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('featureModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
