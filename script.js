document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    this.style.display = 'none';
    document.getElementById('successMessage').classList.add('active');
  });
  