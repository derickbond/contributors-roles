  // Function to set the body's minimum height
    function setBodyMinHeight() {
      const headerHeight = document.querySelector('header').offsetHeight;
      const windowHeight = window.innerHeight;
      const body = document.body;

      // Calculate the minimum height (100vh - headerHeight)
      const minHeight = windowHeight - headerHeight;

      // Set the body's minimum height
      body.style.minHeight = minHeight + 'px';
    }

    // Call the function on page load and window resize
    window.addEventListener('load', setBodyMinHeight);
    window.addEventListener('resize', setBodyMinHeight);
