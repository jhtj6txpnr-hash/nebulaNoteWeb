console.log("Weed Tracker gestartet 🌿");

// Elemente
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const amountInput = document.getElementById("amountInput");
const display = document.getElementById("stockDisplay");

// aktuellen Vorrat laden
let stock = Number(localStorage.getItem("weedStock")) || 0;
updateDisplay();

// + Gramm
addBtn.addEventListener("click", () => {
    const amount = Number(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Gib eine echte Grammzahl ein, Bruder 🌿");
        return;
    }

    stock += amount;
    save();
});

// – Gramm
removeBtn.addEventListener("click", () => {
    const amount = Number(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Grammzahl muss real sein 😭");
        return;
    }

    if (stock - amount < 0) {
        alert("Du hast nicht so viel übrig, G 💀");
        return;
    }

    stock -= amount;
    save();
});

// speichern + anzeigen
function save() {
    localStorage.setItem("weedStock", stock);
    updateDisplay();
    amountInput.value = "";
}

// Anzeige updaten
function updateDisplay() {
    display.textContent = stock + "g";

    if (stock > 10) {
        display.style.color = "#00ff7f"; // viel Weed
    } else if (stock > 3) {
        display.style.color = "#ffd93b"; // geht klar
    } else {
        display.style.color = "#ff4d4d"; // wird kritisch
    }
}