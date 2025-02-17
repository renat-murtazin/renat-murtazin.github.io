import { data } from './src/data.js';

// Function to render the "Profile" section
const renderProfileSection = () => {
    const profileSection = document.getElementById('profile');

    // Create the HTML content dynamically
    profileSection.innerHTML = `
        <div class="image">
            <img src="${data.photo}" alt="Profile Picture">
        </div>
        <h2 class="name">${data.name} ${data.lastName}</h2>
        <p class="career">${data.jobTitle}</p>
    `;
};

// Function to render the "Contact Details" section
const renderContactInfo = () => {
    const contactSection = document.getElementById('contacts').querySelector("ul");
    contactSection.innerHTML = '';

    // Loop through each contact info object
    data.contactInfo.forEach(item => {
        let listItemContent = `
            <li>
                <i class="fa ${item.iconClass}"></i>
                ${item.link ? `<a class="link" href="${item.link}" target="_blank">${item.content}</a>` : item.content}
        `;

        // If there's additional content (like the "Open for relocation" part), append it
        if (item.additionalContent) {
            listItemContent += `<br>${item.additionalContent}`;
        }

        listItemContent += `</li>`;

        contactSection.innerHTML += listItemContent;
    });
};

// Function to render main skills (with levels) in the "topSkills" section
const renderTopSkills = () => {

    const topSkillsSection = document.getElementById("topSkills").querySelector("ul");

    // Clear any existing content
    topSkillsSection.innerHTML = '';

    data.topSkills.forEach(skill => {
        const skillItem = document.createElement("li");

        skillItem.innerHTML = `
                <p class="skill-title">${skill.name}</p>
                <div class="progress-bar">
                    <div class="actual-progress" style="width: ${skill.level};"></div>
                </div>
            `;

        topSkillsSection.appendChild(skillItem);
    });
};

// Function to render the tools and skill set in the "skillSet" section
const renderSkillSet = () => {
    const skillSetSection = document.getElementById("skillSet").querySelector(".tool-set");

    // Clear any existing content
    skillSetSection.innerHTML = '';

    data.skillSet.forEach(skill => {
        const skillDiv = document.createElement("div");
        skillDiv.classList.add("skill");
        skillDiv.textContent = skill;
        skillSetSection.appendChild(skillDiv);
    });
};

// Function to render languages in the "languages" section
const renderLanguages = () => {
    const languagesSection = document.getElementById("languages").querySelector(".language-container");

    // Clear any existing content
    languagesSection.innerHTML = '';

    data.languages.forEach(language => {
        const languagePara = document.createElement("p");
        languagePara.classList.add("language");
        languagePara.innerHTML = `${language.name} - <strong>${language.level}</strong>`;
        languagesSection.appendChild(languagePara);
    });
};

// Function to render certifications in the "certifications" section
const renderCertifications = () => {
    const certificationsSection = document.getElementById("certifications").querySelector(".certification");

    // Clear any existing content
    certificationsSection.innerHTML = '';

    data.certifications.forEach(cert => {
        // Create a div for each certification
        const certificationDiv = document.createElement("div");
        certificationDiv.classList.add("certification-item");

        // Create an anchor tag with the certification link
        const certificationLink = document.createElement("a");
        certificationLink.href = cert.link;
        certificationLink.target = "_blank";

        // Create an image tag for the certification image
        const certificationImage = document.createElement("img");
        certificationImage.src = cert.imageSrc;
        certificationImage.alt = cert.name;

        // Append the image to the anchor tag
        certificationLink.appendChild(certificationImage);

        // Create a span for the certification name (below the image)
        const certificationText = document.createElement("span");
        certificationText.classList.add("show-cert-text");
        certificationText.textContent = cert.name;

        // Append the anchor link and the certification text to the certification div
        certificationDiv.appendChild(certificationLink);
        certificationDiv.appendChild(certificationText);

        // Append the certification div to the certifications section
        certificationsSection.appendChild(certificationDiv);
    });
};

function createRightTitle(title) {
    return `<h2 class="right-title">${title}</h2>`;
}

// Render About Me Section
const renderAboutMe = () => {
    const aboutMeSection = document.getElementById('about');
    const { title, content } = data.aboutMe;

    aboutMeSection.innerHTML = `
        ${createRightTitle(title)}
        <p class="para">${content}</p>
    `;
}

// Render Experience Section
const renderExperience = () => {
    const experienceSection = document.getElementById('experience');
    experienceSection.innerHTML = createRightTitle(data.experience.title);

    data.experience.projects.forEach((exp) => {
        let stack = exp.stack.map(tool => `<div class="tool">${tool}</div>`).join('');
        let responsibilities = exp.responsibilities.length > 0
            ? `<h4>Main Responsibilities</h4>
                <div class="proj-desc-list">
                    <ul>${exp.responsibilities.map(res => `<li><p class="para">${res}</p></li>`).join('')}</ul>
                </div>`
            : '';

        let achievements = exp.achievements.length > 0
            ? `<h4>Achievements</h4>
                <div class="proj-desc-list">
                    <ul>${exp.achievements.map(ach => `<li><p class="para">${ach}</p></li>`).join('')}</ul>
                </div>`
            : '';

        experienceSection.innerHTML += `
            <div class="timeline">
                <h3 class="company-name">${exp.company}</h3>
                <div class="project-intro">
                    <p class="job-title">${exp.jobTitle}</p>
                    <p class="proj-time">${exp.period}</p>
                </div>
                <div class="proj-desc">
                    <p class="job-desc"><span class="job-desc-word">Project: </span><strong>${exp.project}</strong></p>
                    <div class="stack">
                        ${stack}
                    </div>
                </div>
                <p class="para about-proj">${exp.description}</p>
                ${responsibilities}
                ${achievements}
            </div>
        `;
    });
};

// Render Education Section
function renderEducation() {
    const educationSection = document.getElementById('education');
    educationSection.innerHTML = createRightTitle(data.education.title);

    data.education.programs.forEach((edu) => {
        educationSection.innerHTML += `
            <div class="timeline tl-ed-padding">
                <h3 class="company-name">${edu.university}</h3>
                <div class="project-intro">
                    <p class="job-title">${edu.program}</p>
                    <p class="proj-time">${edu.period}</p>
                </div>
                <div class="proj-desc">
                    <p class="job-desc-word">${edu.degree}</p>
                </div>
            </div>
        `;
    });
}

// Call render functions when the page loads
document.addEventListener("DOMContentLoaded", () => {
    renderProfileSection();
    renderContactInfo();
    renderTopSkills();
    renderSkillSet();
    renderLanguages();
    renderCertifications();
    renderAboutMe();
    renderExperience();
    renderEducation();
});






