const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const fullName = document.querySelector('input[type="text"][placeholder="Enter full name"]').value;
  const emailAddress = document.querySelector('input[type="text"][placeholder="Enter email address"]').value;
  const phoneNumber = document.querySelector('input[type="number"][placeholder="Enter phone number"]').value;
  const birthDate = document.querySelector('input[type="date"][placeholder="Enter birth date"]').value;
  const selectedGender = document.querySelector('input[name="gender"]:checked').value;
  const streetAddress1 = document.querySelector('input[placeholder="Enter street address"]').value;
  const streetAddress2 = document.querySelector('input[placeholder="Enter street address line 2"]').value;
  const country = document.querySelector('select').value;
  const city = document.querySelector('input[placeholder="Enter your city"]').value;
  const region = document.querySelector('input[placeholder="Enter your region"]').value;
  const postalCode = document.querySelector('input[placeholder="Enter postal code"]').value;

  const message = `
    Full Name: ${fullName}
    Email Address: ${emailAddress}
    Phone Number: ${phoneNumber}
    Birth Date: ${birthDate}
    Gender: ${selectedGender}
    Street Address 1: ${streetAddress1}
    Street Address 2: ${streetAddress2}
    Country: ${country}
    City: ${city}
    Region: ${region}
    Postal Code: ${postalCode}
  `;

  alert('Registration Successful!\n\n' + message);

  form.reset();
});
