document.getElementById('myForm').addEventListener('submit', function(event) {
    const validationName = document.getElementById('validationName');
    const validationEmail = document.getElementById('validationEmail');
    const validationPassword = document.getElementById('validationPassword');
  
    if (validationName.validity.valueMissing || validationEmail.validity.valueMissing || validationPassword.validity.valueMissing) {
      event.preventDefault();
      validationName.focus();
      validationEmail.focus();
      validationPassword.focus();
    }
  });

  const dobInput = document.getElementById("dob");

// add event listener for input event to add custom styles to the input
dobInput.addEventListener("input", function() {
  const dobRegex = /^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](19|20)\d\d$/;
  if (!dobRegex.test(dobInput.value)) {
    dobInput.style.borderColor = "red";
    dobInput.nextElementSibling.textContent = "use the format dd/mm/yyyy.";
  } else {
    dobInput.style.borderColor = "";
    dobInput.nextElementSibling.textContent = "";
  }
});

// add event listener for submit event to check the validity of the form
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function(event) {
  const dobRegex = /^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](19|20)\d\d$/;
  if (!dobRegex.test(dobInput.value)) {
    event.preventDefault();
    dobInput.style.borderColor = "red";
    dobInput.nextElementSibling.textContent = "use the format dd/mm/yyyy.";
  } else {
    dobInput.style.borderColor = "";
    dobInput.nextElementSibling.textContent = "";
  }
});