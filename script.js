document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the current page path
    var currentPagePath = window.location.pathname;
  
    // Remove the 'active' class from all tabs
    var tabs = document.querySelectorAll('.nav-link');
    tabs.forEach(function (tab) {
      tab.classList.remove('active');
    });
  
    // Find the corresponding tab and add 'active' class
    for (var i = 0; i < tabs.length; i++) {
      var tabPath = new URL(tabs[i].href).pathname;
      if (tabPath === currentPagePath) {
        tabs[i].classList.add('active');
        break;
      }
    }
  });
  
  