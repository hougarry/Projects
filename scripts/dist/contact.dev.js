"use strict";

//init emailjs
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init('yuCcGjmpcWOZcdfxJ');
})(); //send email function


window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    this.contact_number.value = Math.random() * 100000 | 0;
    emailjs.sendForm('service_qloxods', 'template_wpl9rz7', this).then(function () {
      console.log('SUCCESS!');
      alert('Email sent successfully!');
    }, function (error) {
      console.log('FAILED...', error);
      alert('Failed to send email. See the console for more details.');
    });
  });
};