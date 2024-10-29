
// Get the elements
const skillsSection = document.getElementById('skills') as HTMLTextAreaElement;
const toggleSkillsButton = document.getElementById('toogle-skills') as HTMLButtonElement;
const skillsLabel = document.getElementById('skills-label');


// Add event listener to the button
toggleSkillsButton.addEventListener('click', () => {
  if(skillsSection.style.display === 'none'){
    skillsSection.style.display = 'block';
    // skillsLabel.style.display = 'block';
    toggleSkillsButton.textContent = 'Hide';

  }else{
    skillsSection.style.display = 'none';
    toggleSkillsButton.textContent = 'Show';
  }
});





// Get reference to the form and display area
const form: HTMLFormElement | null = document.getElementById('Resume');
const resumeDisplayElement: HTMLDivElement | null = document.getElementById('resume-display');

// Handle form submission
if (form && resumeDisplayElement) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const Name: string = (document.getElementById('name') as HTMLInputElement).value;
    const email: string = (document.getElementById("email") as HTMLInputElement).value;
    const phone: string = (document.getElementById("phone") as HTMLInputElement).value;
    const address: string = (document.getElementById("address") as HTMLInputElement).value;
    const education: string = (document.getElementById("education") as HTMLTextAreaElement).value;
    const skills: string = (document.getElementById("skills") as HTMLTextAreaElement).value;
    const Experience: string = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const linkedin: string = (document.getElementById("linkedin") as HTMLInputElement).value;
    const github: string = (document.getElementById("github") as HTMLInputElement).value;
    const pictureInput: HTMLInputElement = (document.getElementById("picture") as HTMLInputElement);

    // Validate form data
    if (!Name || !email || !phone || !address || !education || !skills || !Experience || !linkedin || !github) {
      alert("Please fill in all the required fields");
      return;
    }

    // Handle profile picture upload
    let profilePictureURL: string = "";
    if (pictureInput.files && pictureInput.files[0]) {
      const fileReader: FileReader = new FileReader();
      fileReader.onload = () => {
        profilePictureURL = fileReader.result as string;
        generateResumeHTML();
      };
      fileReader.readAsDataURL(pictureInput.files[0]);
    } else {
      generateResumeHTML();
    }

    function generateResumeHTML() {
      const resumeHTML: string = `
        <div class="header2" >
          <h2><b> ${Name} </b></h2>
          ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profile picture">` : ''}
        </div>

        <div id = "main">
          <h3> Personal Information </h3>
          <p> <b> Email: </b>${email}</p>
          <p> <b> Phone: </b>${phone}</p>
          <p> <b> Address: </b>${address}</p>
        </div>

        <div id = "main">
          <h3> Education</h3>
          <p><b>education: </b> ${education}</p>
        </div>

        <div id = "main">
          <h3> Skills</h3>
          <p><b>Skills: </b> ${skills}</p>
        </div>

        <div id = "main">
          <h3> Work Experience</h3>
          <p><b> Experince: </b> ${Experience }</p>
        </div>

        <div id="header2" >
          <h3>Links</h3>
          <p><b>LinkedIn: </b> ${linkedin}</p>
          <p><b>GitHub: </b> ${github}</p>
        </div>
      `;

      resumeDisplayElement.innerHTML = resumeHTML;
    }
  });
} else {
  console.error("The Resume Display Element is not available");
}