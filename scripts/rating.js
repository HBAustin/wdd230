const pageRatingInput = document.getElementById('pageRating');
        const pageRatingOutput = document.querySelector('output[for="pageRating"]');

        pageRatingInput.addEventListener('input', function () {
            pageRatingOutput.textContent = this.value;
        });

        function validateForm() {
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("confirmPassword").value;
            var passwordError = document.getElementById("passwordError");

            if (password !== confirmPassword) {
                passwordError.style.display = "block"; // Display the error message
                return false; // Prevent form submission
            } else {
                passwordError.style.display = "none"; // Hide the error message
                return true;
            }
        }