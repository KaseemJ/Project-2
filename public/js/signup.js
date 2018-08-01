$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var nameInput = $("input#UserName-input");
  var phoneInput = $("input#PhoneNumber-input");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");


  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      userName: nameInput.val().trim(),
      phoneNumber: phoneInput.val().trim()
    };

    if (!userData.email || !userData.password || !userData.userName || !userData.phoneNumber) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.userName, userData.phoneNumber);
    emailInput.val("");
    passwordInput.val("");
    nameInput.val("");
    phoneInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, userName, phoneNumber) {
    $.post("/api/signup", {
      email: email,
      password: password,
      user_name: userName,
      phone_number: phoneNumber
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
