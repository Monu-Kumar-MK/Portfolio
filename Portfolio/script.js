document.addEventListener('DOMContentLoaded', function() {
    // Map initialization
    // Replace the `your-map-api-key` with your actual map API key and configure the map integration code accordingly.
    // Example: Initialize Google Maps using the Google Maps JavaScript API
    // (You need to include the Google Maps JavaScript API script tag in the HTML file)
    // var map = new google.maps.Map(document.getElementById('map'), {
    //   center: { lat: -34.397, lng: 150.644 },
    //   zoom: 8
    // });
  
    // Form submission and validation
    var contactForm = document.getElementById('contact-form');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var isValid = validateForm();
      if (isValid) {
        // Form submission logic
        var formData = {
          name: nameInput.value,
          email: emailInput.value,
          message: messageInput.value
        };
        // Send the form data to the server or perform any desired actions
        console.log(formData);
  
        // Clear form inputs
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
      }
    });
  
    function validateForm() {
      var isValid = true;
      errorMessage.innerHTML = '';
  
      if (nameInput.value.trim() === '') {
        isValid = false;
        errorMessage.innerHTML += 'Please enter your name.<br>';
      }
  
      if (emailInput.value.trim() === '') {
        isValid = false;
        errorMessage.innerHTML += 'Please enter your email.<br>';
      } else if (!isValidEmail(emailInput.value.trim())) {
        isValid = false;
        errorMessage.innerHTML += 'Please enter a valid email address.<br>';
      }
  
      if (messageInput.value.trim() === '') {
        isValid = false;
        errorMessage.innerHTML += 'Please enter your message.<br>';
      }
  
      if (!isValid) {
        contactForm.appendChild(errorMessage);
      }
  
      return isValid;
    }
  
    function isValidEmail(email) {
      // Simple email validation using regular expression
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  