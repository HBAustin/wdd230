document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('rentalForm');
  const confirmationModal = document.getElementById('confirmationModal');
  const confirmModalButton = document.getElementById('confirmModalButton');
  const cancelModalButton = document.getElementById('cancelModalButton');
  const submitButton = document.querySelector('button[type="submit"]');
  const requiredFields = form.querySelectorAll('[required]');

  function areRequiredFieldsFilled() {
    let filled = true;
    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        filled = false;
      }
    });
    return filled;
  }

  function showConfirmationModal(event) {
    event.preventDefault();
    if (areRequiredFieldsFilled()) {
      confirmationModal.style.display = 'block';
    } else {
      alert('Please fill in all required fields.');
    }
  }

  submitButton.addEventListener('click', showConfirmationModal);

  confirmModalButton.addEventListener('click', function () {
    confirmationModal.style.display = 'none';
    form.submit();
  });

  cancelModalButton.addEventListener('click', function (event) {
    event.preventDefault(); 
    confirmationModal.style.display = 'none';
  });
});