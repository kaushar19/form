function clear_Button() {
  document.getElementById("txtName").value = "";
  document.getElementById("txtNumber").value = "";
  document.getElementById("txtEmail").value = "";
  document.getElementById("txtMessage").value = "";
}
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxLcQLQle_I4ULIqaojSJXqks4C6bx9t64vcmLK1awgV367rAFDzndqHwbXbRiy_-yd/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
