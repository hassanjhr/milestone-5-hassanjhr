// Listing element

document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    // type assertion
    // const profilePictureInput = document.getElementById(
    //   "profilePicture"
    // ) as HTMLInputElement;

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const contactElement = document.getElementById(
      "contact"
    ) as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

// **
const usernameElement = document.getElementById(
  "username"
) as HTMLInputElement;


    if (
      // profilePictureInput &&
      nameElement &&
      emailElement &&
      contactElement &&
      educationElement &&
      experienceElement &&
      skillsElement &&
      // **
      usernameElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const contact = contactElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;


      // **
      const username = usernameElement.value;
      const uniquePath = `resumes/${username.replace(/\s+/g,'_')}_cv.html`





      // const profilePicture = profilePictureInput.value;

      //  image element
      // const profilePictureFile = profilePictureInput.files?.[0];
      // const profilePictureURL = profilePictureFile
      //   ? URL.createObjectURL(profilePictureFile)
      //   : '';

// ${
//   profilePictureURL
//     ? `<img scr= "${profilePictureURL}" alt = "Profile Picture" class = "profilePicture">`
//     : ''}

      // resume output
      const resumeOutput = `
<h2>Resume</h2>


<p><strong>Name:</strong> <span id= "edit-name" class="editable"> ${name} </span> </p>
<p><strong>email:</strong>  <span id= "edit-email" class="editable"> ${email} </span> </p>
<p><strong>contact:</strong>  <span id= "edit-contact" class="editable"> ${contact} </span> </p>

<h3>Education</h3>
<p id= "edit-education" class="editable">${education}</p>

<h3>Experience</h3>
<p id= "edit-experience" class="editable">${experience}</p>

<h3>Skills</h3>
<p id= "edit-skills" class="editable">${skills}</p>



`;


 // **
const downloadLink = document.createElement('a')
  downloadLink.href = 'data:text/html;charset=uft-8,' + encodeURIComponent(resumeOutput)
  downloadLink.download = uniquePath;
  downloadLink.textContent = 'Download Your 2024 Resume';




      // Display (Resume output)
      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;

// **
resumeOutputElement.appendChild(downloadLink)

        makeEditable();
      }
    } else {
      console.log("One or More Output Element are Missing");
    }
  });

function makeEditable() {
  const editableElements = document.querySelectorAll(".editable");
  editableElements.forEach((element) => {
    element.addEventListener("click", function () {
      const currentElement = element as HTMLElement;
      const currentValue = currentElement.textContent || "";

      // replace content
      if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentValue;
        input.classList.add("editing-input");

        input.addEventListener("blur", function () {
          currentElement.textContent = input.value;
          currentElement.style.display = "inline";
          input.remove();
        });

        currentElement.style.display = "none";
        currentElement.parentNode?.insertBefore(input, currentElement);
        input.focus();
      }
    });
  });
}
