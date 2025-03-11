// This adds in the footer html and css info

document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then((response) => response.text())
    .then((html) => {
      // So it loads at bottom and not top
      document.body.insertAdjacentHTML("beforeend", html);
    })
    .catch((error) => console.error("Error loading footer:", error));

  // Loading in the css
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "css/footer.css";
  document.head.appendChild(link);
});
