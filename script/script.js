// Function for Scroll to the top

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // Calculate the distance between the bottom of the page and the bottom of the viewport
  var distanceToBottom =
    document.body.scrollHeight - window.innerHeight - window.pageYOffset;

  // If the distance to the bottom is very small or negative (indicating the user is at or near the bottom),
  // show the scroll-to-top button, otherwise hide it
  if (distanceToBottom <= 20) {
    document.getElementById("scroll-to-top").style.display = "block";
  } else {
    document.getElementById("scroll-to-top").style.display = "none";
  }
}

// function for mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".overlay");
  const sheet = document.querySelector(".sheet");
  const closeBtn = document.querySelector(".close-btn");

  mobileMenu.addEventListener("click", function () {
    overlay.classList.add("active");
    sheet.classList.add("active");
  });

  closeBtn.addEventListener("click", function () {
    overlay.classList.remove("active");
    sheet.classList.remove("active");
  });

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      overlay.classList.remove("active");
      sheet.classList.remove("active");
    }
  });
});
