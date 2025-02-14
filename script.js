function switchTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    // Show selected tab
    document.getElementById(tabId).classList.add('active');
    
    // Update navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('brand-pink');
        if (btn.getAttribute('onclick').includes(tabId)) {
            btn.classList.add('brand-pink');
        }
    });
}

function openBooking(service) {
    document.getElementById('serviceSelect').value = service;
    switchTab('bookTab');
}

function submitBooking(event) {
    event.preventDefault();
    alert('Booking request submitted successfully!');
    document.getElementById('bookingForm').reset();
    switchTab('homeTab');
}
