document.addEventListener("DOMContentLoaded", function () {
    loadMembers("grid");

    window.toggleView = function (view) {
        document.getElementById("membersContainer").className = view + "-view";
        loadMembers(view);
    };
});

function loadMembers(view) {
    fetch("data/members.json")
    .then(response => response.json())
    .then(data => {
        const membersContainer = document.getElementById("membersContainer");

        membersContainer.innerHTML = "";

        data.members.forEach(member => {
            const memberCard = document.createElement("div");
            memberCard.className = "member-card";

            if (view == "grid") {
                memberCard.className = "member-card grid-view";
                memberCard.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}" loading="lazy" />
                    <div class="member-details">
                        <h3>${member.name}</h3>
                        <p>${member.address}</p>
                        <p>${member.phone}</p>
                        <a href="${member.website}" target="_blank">Visit Website</a>
                        <p>Membership Level: ${member.membershipLevel}</p>
                        <p>${member.otherInfo}</p>
                    </div>
                `;
            } else if (view === "list") {
                memberCard.className = "member-card list-view";
                memberCard.innerHTML = `
                    <div class="list-view-content">
                        <img src="images/${member.image}" alt="${member.name}" loading="lazy" />
                        <div class="member-details">
                            <h3>${member.name}</h3>
                            <p>${member.address}</p>
                            <p>${member.phone}</p>
                            <a href="${member.website}">Visit Website</a>
                            <p>Membership Level: ${member.membershipLevel}</p>
                            <p>${member.otherInfo}</p>
                        </div>
                    </div>
                `;
            }

            membersContainer.appendChild(memberCard);
        });
    })
    .catch(error => console.error("Error loadin members". error));
}