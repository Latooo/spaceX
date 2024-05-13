document.addEventListener("DOMContentLoaded", () => {
    const tabContainer = document.getElementById("tabContainer");
    const rocketDetails = document.getElementById("rocketDetails");
  
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((rocket, index) => {
          const tab = document.createElement("div");
          tab.classList.add("tab");
          tab.textContent = `Rocket ${index + 1}`;
          tab.addEventListener("click", () => showRocketDetails(rocket));
          tabContainer.appendChild(tab);
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  
    function showRocketDetails(rocket) {
      rocketDetails.innerHTML = `
        <h2>${rocket.name}</h2>
        <p>ID: ${rocket.id}</p>
        <p>Type: ${rocket.type}</p>
        <p>Active: ${rocket.active ? "Yes" : "No"}</p>
        <p>Stages: ${rocket.stages}</p>
        <p>Cost Per Launch: $${rocket.cost_per_launch}</p>
        <p>Description: ${rocket.description}</p>
      `;
    }
  });
  