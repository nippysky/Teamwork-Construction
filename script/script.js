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
