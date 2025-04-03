
const aboutBackButton = document.getElementById('about-back-button');
const githubLink = document.getElementById('github-button');
const linkedinLink = document.getElementById('linkedin-button');
const emailLink = document.getElementById('email-button');

// About links
githubLink.addEventListener('click', () => {
    window.location.href = 'https://github.com/Ephernicus';
});

linkedinLink.addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com/in/mjiu/';
});

emailLink.addEventListener('click', () => {
    window.location.href = 'mailto:jiumaggie@gmail.com';
});

aboutBackButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});

