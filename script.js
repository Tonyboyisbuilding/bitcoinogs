// Variable to track the current section
let currentSection = 1;

// Function to scroll to the next section
function scrollToNext() {
    currentSection++;
    scrollToSection(currentSection);
}

// Function to scroll to a specific section
function scrollToSection(sectionNumber) {
    const section = document.querySelector(`#section${sectionNumber}`);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Event listener for pulse button click
const pulseBtn = document.querySelector('.pulse-btn');
pulseBtn.addEventListener('click', scrollToNext);

// Event listener for scroll
window.addEventListener('wheel', function (event) {
    const deltaY = event.deltaY;
    const defaultSectionHeight = window.innerHeight;

    if (deltaY > 0 && currentSection === 1) {
        // Scrolling down in default section
        currentSection++;
        scrollToSection(currentSection);
    } else if (deltaY < 0 && currentSection === 2) {
        // Scrolling up in the second section
        currentSection--;
        scrollToSection(currentSection);
    }
});

// Event listener for page load
window.addEventListener('load', function () {
    // Scroll to the default section on page load
    scrollToSection(1);
});
