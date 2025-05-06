  // Add smooth scroll behavior for navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        // Add scroll functionality here
        console.log('Navigation item clicked:', this.textContent);
    });
});

// Mobile menu toggle
window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
        // Add mobile menu adjustments here
    }
});






