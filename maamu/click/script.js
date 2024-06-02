window.addEventListener('load', function() {
    new Noty({
      type: 'warning',
      layout: 'center', // Position the notification in the top right corner
      text: 'Keep clicking anywhere on the screen!!',
      timeout: 2000, // Duration in milliseconds before the notification automatically closes+
    }).show();
  });
  
  