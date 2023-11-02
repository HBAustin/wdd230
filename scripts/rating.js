const pageRatingInput = document.getElementById('pageRating');
        const pageRatingOutput = document.querySelector('output[for="pageRating"]');

        pageRatingInput.addEventListener('input', function () {
            pageRatingOutput.textContent = this.value;
        });