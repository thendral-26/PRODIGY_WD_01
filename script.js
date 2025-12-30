function goNext() {
  window.location.href = "about.html";
}
function submitForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let successMsg = document.getElementById("successMsg");

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields");
    return false;
  }

  successMsg.innerText = "Message sent successfully!";
  successMsg.style.color = "#00ffcc";

  return false; // page reload aagama stop pannum
}
