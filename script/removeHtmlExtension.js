// removeHtmlExtension.js

// This function removes the .html extension from the URL
function removeHtmlExtension() {
  if (location.pathname.substr(-5) == ".html") {
    var newUrl = location.pathname.slice(0, -5);
    history.replaceState({}, "", newUrl);
  }
}

// Call the function when the page loads
removeHtmlExtension();
