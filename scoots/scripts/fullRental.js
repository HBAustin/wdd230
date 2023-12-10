document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('data/fullRental.json');
        const data = await response.json();

        const scooters = data.scooters;
        const atvs = data.ATV;
        const cars = data.cars;

        const scooterSection = document.getElementById('scooterSection');
        scooters.forEach(scooter => {
            const { type, max, halfDay_reserve, fullDay_reserve, halfDay_walk, fullDay_walk, image } = scooter;
            const scooterElement = document.createElement('div');
            scooterElement.innerHTML = `
                <h3>${type}</h3>
                <p>Max People: ${max}</p>
                <h4> Reserve Price </h4>
                <p>Half Day (3 hours): $${halfDay_reserve}</p>
                <p>Full Day : $${fullDay_reserve}</p>
                <h4>Walk-in price</h4>
                <p>Half Day (3 hours): $${halfDay_walk}</p>
                <p>Full Day: $${fullDay_walk}</p>
                <img src="${image}" alt="${type}" />
            `;
            scooterSection.appendChild(scooterElement);
        });

        const atvSection = document.getElementById('atvSection');
        atvs.forEach(atv => {
            const { type, max, halfDay_reserve, fullDay_reserve, halfDay_walk, fullDay_walk, image } = atv;
            const atvElement = document.createElement('div');
            atvElement.innerHTML = `
                <h3>${type}</h3>
                <p>Max People: ${max}</p>
                <h4> Reserve Price </h4>
                <p>Half Day (3 hours): $${halfDay_reserve}</p>
                <p>Full Day : $${fullDay_reserve}</p>
                <h4>Walk-in price</h4>
                <p>Half Day (3 hours): $${halfDay_walk}</p>
                <p>Full Day: $${fullDay_walk}</p>
                <img src="${image}" alt="${type}" />
            `;
            atvSection.appendChild(atvElement);
        });

        const carSection = document.getElementById('carSection');
        cars.forEach(car => {
            const { type, max, halfDay_reserve, fullDay_reserve, halfDay_walk, fullDay_walk, image } = car;
            const carElement = document.createElement('div');
            carElement.innerHTML = `
                <h3>${type}</h3>
                <p>Max People: ${max}</p>
                <h4> Reserve Price </h4>
                <p>Half Day (3 hours): $${halfDay_reserve}</p>
                <p>Full Day : $${fullDay_reserve}</p>
                <h4>Walk-in price</h4>
                <p>Half Day (3 hours): $${halfDay_walk}</p>
                <p>Full Day: $${fullDay_walk}</p>
                <img src="${image}" alt="${type}" />
            `;
            carSection.appendChild(carElement);
        });

    } catch (error) {
        console.error('Error fetching rental data:', error);
    }
});