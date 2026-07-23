function filterGallery(category) {
  let items = document.querySelectorAll(".gallery-item");
  items.forEach(function (item) {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

/*--------------------sprinkle-----------*/

window.onload = function () {
  for (let i = 0; i < 200; i++) {
    let sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * 100 + "vw";

    sparkle.style.animationDelay = Math.random() * 3 + "s";

    document.body.appendChild(sparkle);
  }
};

/*-------------request quote--------*/
function requestQuote() {
  alert(
    "Thank You! Your quotation request has been sent successfully. Our team will contact you soon.",
  );
  window.location.href = "success.html";
}
