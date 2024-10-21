let submitBtn = document.getElementById("submitBtn");
let result = "";
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let fname = document.getElementById("first-name");
  let lname = document.getElementById("last-name");
  let phoneNum = document.getElementById("phone-num");
  let email = document.getElementById("email-id");

  //   Alert Output: First Name: John
  //   Last Name: Doe Phone Number: 1234567890
  //   Email ID: john.doe@example.com

  result = `First Name: ${fname.value} Last Name: ${lname.value} Phone Number: ${phoneNum.value} Email ID: ${email.value}`;

  alert(result);
});
