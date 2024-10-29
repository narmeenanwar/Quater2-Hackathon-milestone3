// Get the elements
var skillsSection = document.getElementById('skills');
var toggleSkillsButton = document.getElementById('toogle-skills');
var skillsLabel = document.getElementById('skills-label');
// Add event listener to the button
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        // skillsLabel.style.display = 'block';
        toggleSkillsButton.textContent = 'Hide';
    }
    else {
        skillsSection.style.display = 'none';
        toggleSkillsButton.textContent = 'Show';
    }
});
// Get reference to the form and display area
var form = document.getElementById('Resume');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
if (form && resumeDisplayElement) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var Name = document.getElementById('name').value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value;
        var education = document.getElementById("education").value;
        var skills = document.getElementById("skills").value;
        var Experience = document.getElementById("experience").value;
        var linkedin = document.getElementById("linkedin").value;
        var github = document.getElementById("github").value;
        var pictureInput = document.getElementById("picture");
        // Validate form data
        if (!Name || !email || !phone || !address || !education || !skills || !Experience || !linkedin || !github) {
            alert("Please fill in all the required fields");
            return;
        }
        // Handle profile picture upload
        var profilePictureURL = "";
        if (pictureInput.files && pictureInput.files[0]) {
            var fileReader_1 = new FileReader();
            fileReader_1.onload = function () {
                profilePictureURL = fileReader_1.result;
                generateResumeHTML();
            };
            fileReader_1.readAsDataURL(pictureInput.files[0]);
        }
        else {
            generateResumeHTML();
        }
        function generateResumeHTML() {
            var resumeHTML = "\n        <div class=\"header2\" >\n          <h2><b> ".concat(Name, " </b></h2>\n          ").concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profile picture\">") : '', "\n        </div>\n\n        <div id = \"main\">\n          <h3> Personal Information </h3>\n          <p> <b> Email: </b>").concat(email, "</p>\n          <p> <b> Phone: </b>").concat(phone, "</p>\n          <p> <b> Address: </b>").concat(address, "</p>\n        </div>\n\n        <div id = \"main\">\n          <h3> Education</h3>\n          <p><b>education: </b> ").concat(education, "</p>\n        </div>\n\n        <div id = \"main\">\n          <h3> Skills</h3>\n          <p><b>Skills: </b> ").concat(skills, "</p>\n        </div>\n\n        <div id = \"main\">\n          <h3> Work Experience</h3>\n          <p><b> Experince: </b> ").concat(Experience, "</p>\n        </div>\n\n        <div id=\"header2\" >\n          <h3>Links</h3>\n          <p><b>LinkedIn: </b> ").concat(linkedin, "</p>\n          <p><b>GitHub: </b> ").concat(github, "</p>\n        </div>\n      ");
            resumeDisplayElement.innerHTML = resumeHTML;
        }
    });
}
else {
    console.error("The Resume Display Element is not available");
}
