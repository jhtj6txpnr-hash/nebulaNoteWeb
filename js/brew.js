console.log("BrewLog geladen ☕");

const addCup = document.getElementById("addCup");
const removeCup = document.getElementById("removeCup");
const cupInput = document.getElementById("cupInput");
const cupDisplay = document.getElementById("cupDisplay");

// Kaffee-Zähler laden
let cups = Number(localStorage.getItem("coffeeCups")) || 0;
updateDisplay();

// + Tasse
addCup.addEventListener("click", () => {
    const amount = Number(cupInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Bruder gib ne valide Anzahl Tassen ein ☕");
        return;
    }

    cups += amount;
    save();
});

// – Tasse
removeCup.addEventListener("click", () => {
    const amount = Number(cupInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Brudi… nein 😭");
        return;
    }

    if (cups - amount < 0) {
        alert("So viel Kaffee hast du nicht getrunken 💀");
        return;
    }

    cups -= amount;
    save();
});

// speichern + anzeigen
function save() {
    localStorage.setItem("coffeeCups", cups);
    updateDisplay();
    cupInput.value = "";
}

// Anzeige updaten + Warnungen
function updateDisplay() {
    cupDisplay.textContent = cups + " Tassen";

    if (cups <= 2) cupDisplay.style.color = "#ffeba3";     // mild
    else if (cups <= 5) cupDisplay.style.color = "#ffae6f"; // normal
    else cupDisplay.style.color = "#ff4d4d";                // zu viel
}