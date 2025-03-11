// Navbar load

document.addEventListener("DOMContentLoaded", function () {
  // Load the navbar HTML
  fetch("navbar.html")
    .then((response) => response.text())
    .then((html) => {
      document.body.insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => console.error("Error loading navbar:", error));

  // Load the navbar CSS
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "css/navbar.css";
  document.head.appendChild(link);
});
