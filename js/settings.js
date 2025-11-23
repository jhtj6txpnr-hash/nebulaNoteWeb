console.log("Settings geladen ⚙️");

// Elemente greifen
const nameInput = document.getElementById("nameInput");
const saveName = document.getElementById("saveName");
const toggleDark = document.getElementById("toggleDark");
const themeBtns = document.querySelectorAll(".themeBtn");

// Name laden
nameInput.value = localStorage.getItem("nebulaName") || "";

// Name speichern
saveName.addEventListener("click", () => {
    localStorage.setItem("nebulaName", nameInput.value.trim());
    alert("Name gespeichert, Bruder 😤✨");
});

// Dark Mode togglen
toggleDark.addEventListener("click", () => {
    let isDark = localStorage.getItem("nebulaDark") === "true";
    localStorage.setItem("nebulaDark", !isDark);
    applyTheme();
});

// Farbtheme setzen
themeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const color = btn.dataset.color;
        localStorage.setItem("nebulaTheme", color);
        applyTheme();
    });
});

// Theme anwenden
function applyTheme() {
    const color = localStorage.getItem("nebulaTheme") || "blue";
    const dark = localStorage.getItem("nebulaDark") === "true";

    let root = document.documentElement;

    // Glowfarben setzen
    const map = {
        blue: "#3a7bff",
        green: "#00ff7f",
        orange: "#ffae6f",
        purple: "#b45cff"
    };

    root.style.setProperty("--glow", map[color]);

    // Dark/light backgrounds
    if (dark) {
        root.style.setProperty("--bg", "linear-gradient(135deg, #000, #111)");
        root.style.setProperty("--text", "white");
    } else {
        root.style.setProperty("--bg", "linear-gradient(135deg, #ffffff, #e6e6e6)");
        root.style.setProperty("--text", "#222");
    }
}

applyTheme();

document.getElementById("accName").textContent = localStorage.getItem("username") || "User";

const lastLogin = localStorage.getItem("lastLogin");
document.getElementById("accLogin").textContent = lastLogin || "Unbekannt";