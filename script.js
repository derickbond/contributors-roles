// Dynamically set the minimum height of the body to ensure it's at least 100vh
    function setBodyMinHeight() {
      const headerHeight = document.querySelector('header').offsetHeight;
      document.body.style.minHeight = `calc(100vh - ${headerHeight}px)`;
    }

    // Call the function on page load and window resize
    window.addEventListener('load', setBodyMinHeight);
    window.addEventListener('resize', setBodyMinHeight);
