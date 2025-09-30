// Cargar pilotos  
const pilots = [
  { number: 1, name: "Max Verstappen", team: "Red Bull", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXR6dTZyeXU1eXB1ZWpsMm1wamx1bHdrMnU1dHJ5MDI5ejQ3ZDdnaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fqTXYURabsUGmARAzg/giphy.gif" },
  { number: 4, name: "Lando Norris", team: "McLaren", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdG5hZDRlZGJwcnF1Y3p4bDcxNDYwc2Q4ZDg1djJjcnVseTRzcDd0YSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/pomyhX0jNP7BSJqdFm/giphy.gif" },
  { number: 10, name: "Gabriel Bortoleto", team: "McLaren", gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTZ6bzV5azJxOXoyZGU4YXBhenk2OTI0dGJqZDM4bzRlNzU5MjJyOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ckNwO5kaKGxEB3nG8n/giphy.gif" },
  { number: 20, name: "Isack Hadjar", team: "Red Bull", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHE4bzhkamw4cHQ1Y3l5eGgxdWsyaXhkZm83bWdrMjZ5MHRncTRxNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/0qcTW0rspmuQTJhXaK/giphy.gif" },
  { number: 31, name: "Esteban Ocon", team: "Alpine", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThwejUzdWY1Mjh0MHQ0Z3Uwajlxc3g2YzNjbHFnN2VhZ281emxpMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/20QeLmTzt0nUhAP81m/giphy.gif" },
  { number: 38, name: "Andrea Kimi Antonelli", team: "Mercedes", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHZmd2t2YzQ4aTMxb2VtOHpkdmJtc2t5Z2RiYnhmYXI5ZTRuYTRwaiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/8GLTu1Om5sRrD9XYf3/giphy.gif" },
  { number: 81, name: "Oscar Piastri", team: "McLaren", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmc4bnh1ZDdwd3puNGRuNHcwMnU1NGhsZDBqYWtiMWE1MmZ3azJkciZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/zCnQQsOZYH5rCCmkZa/giphy.gif" },
  { number: 44, name: "Lewis Hamilton", team: "Ferrari", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzBnaWFuZThwYjBkZWkyOWI0ZHUza2dmYnVsMDhqM28yOXl6MmE4dCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/U4GBGVkpbw7XvIA6dc/giphy.gif" },
  { number: 63, name: "George Russell", team: "Mercedes", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWtqZTZra2h4azZkcXh4NzltaXphbjBnNzU3aG5rYjBxOWhpOWN1NCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/Vqr35KRSoJqlknrynd/giphy.gif" },
  { number: 55, name: "Carlos Sainz", team: "Ferrari", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzdwNG93MW9wMmE1amRsdnkxN28xOGh6b25waDZuMGg5bmMycjVvcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WqPIiKZPcrsYBL5LFM/giphy.gif" }
];

document.getElementById("loadDrivers").addEventListener("click", () => {
  const container = document.getElementById("driversContainer");
  container.innerHTML = "";

  pilots.forEach(pilot => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${pilot.gif}" alt="${pilot.name}">
      <h3>#${pilot.number} ${pilot.name}</h3>
      <p><strong>Equipo:</strong> ${pilot.team}</p>
    `;
    container.appendChild(card);
  });
});

//  Meetings desde OpenF1 
document.getElementById("loadMeetings").addEventListener("click", async () => {
  const container = document.getElementById("meetingsContainer");
  container.innerHTML = "";

  try {
    const response = await fetch("https://api.openf1.org/v1/meetings?year=2025");
    const data = await response.json();

    data.forEach(meeting => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3>${meeting.meeting_name || "Nombre no disponible"}</h3>
        <p><strong>Año:</strong> ${meeting.year || "N/A"}</p>
        <p><strong>Código:</strong> ${meeting.meeting_code || "N/A"}</p>
        <p><strong>País:</strong> ${meeting.country_name || "N/A"}</p>
        <p><strong>Ciudad:</strong> ${meeting.location || "N/A"}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error cargando meetings:", error);
    container.innerHTML = "<p>Error al cargar meetings.</p>";
  }
});

//Formulario contacto 
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("formMsg").textContent = "¡Mensaje enviado con éxito!";
  document.getElementById("formMsg").style.color = "green";
});
