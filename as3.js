document
  .getElementById("email-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const emailValue = document.getElementById("exampleInputEmail1").value;
    const checkMail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const check = checkMail.test(emailValue);
    if (check) {
      document.querySelector(".form-group").style.display = "none";
      document.querySelector("#personal-info").style.display = "block";
    } else {
      alert("Please enter a valid email address.");
    }
  });
document
  .querySelector(".info-column")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementsByClassName(".viewmore").style.display = "none";
    document.getElementsByClassName(".info-content").style.display = "block";
  });
