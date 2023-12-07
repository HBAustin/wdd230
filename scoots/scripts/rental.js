const rentalData = {
    "scooters": [
        {
            "type": "Honda Metro Scooter",
            "max": 1,
            "halfDay_reserve": 20,
            "fullDay_reserve": 30,
            "halfDay_walk": 25,
            "fullDay_walk": 35
        },
        {
            "type": "Honda Dio Scooter",
            "max": 2,
            "halfDay_reserve": 30,
            "fullDay_reserve": 40,
            "halfDay_walk": 35,
            "fullDay_walk": 45
        },
        {
            "type": "Honda PCX150 Scooter",
            "max": 2,
            "halfDay_reserve": 40,
            "fullDay_reserve": 50,
            "halfDay_walk": 45,
            "fullDay_walk": 55
        }
    ],
    "ATV": [
        {
            "type": "Honda Pioneer ATV",
            "max": 4,
            "halfDay_reserve": 50,
            "fullDay_reserve": 70,
            "halfDay_walk": 60,
            "fullDay_walk": 80
        }
    ],
    "cars": [
        {
            "type": "Jeep Wrangler - 4 door with a/c",
            "max": 5,
            "halfDay_reserve": 70,
            "fullDay_reserve": 100,
            "halfDay_walk": 85,
            "fullDay_walk": 125
        },
        {
            "type": "Jeep Wrangler - 2 door",
            "max": 4,
            "halfDay_reserve": 60,
            "fullDay_reserve": 85,
            "halfDay_walk": 70,
            "fullDay_walk": 90
        }
    ]
};

function createRentalTable() {
    const tableBody = document.getElementById('rentalTableBody');
    Object.keys(rentalData).forEach(type => {
        rentalData[type].forEach(vehicle => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${vehicle.type}</td>
                <td>${vehicle.max}</td>
                <td>$ ${vehicle.halfDay_reserve}</td>
                <td>$ ${vehicle.fullDay_reserve}</td>
                <td>$ ${vehicle.halfDay_walk}</td>
                <td>$ ${vehicle.fullDay_walk}</td>
            `;
            tableBody.appendChild(row);
        });
    });
}

createRentalTable();

function scrollToSection(sectionClass) {
    const section = document.querySelector(`.${sectionClass}`);
    if (section) {
      const scrollOffset = window.innerHeight / 2 - section.offsetHeight / 2;
      window.scrollTo({
        top: section.offsetTop - scrollOffset,
        behavior: 'smooth'
      });
    }
  }

