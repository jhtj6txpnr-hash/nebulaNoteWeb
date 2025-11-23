document.getElementById("loginBtn").addEventListener("click", () => {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (!user || !pass) {
        alert("Bruder, gib was ein!");
        return;
    }

    // Lade alle gespeicherten Benutzer
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Prüfe, ob der Benutzer existiert
    const foundUser = users.find(u => u.username === user && u.password === pass);

    if (!foundUser) {
        alert("Falsche Daten, Bruder!");
        return;
    }

    // Login erfolgreich → Daten speichern
    localStorage.setItem("username", user);
    localStorage.setItem("lastLogin", new Date().toLocaleString());
    localStorage.setItem("NebulaLoggedIn", "true");

    // Weiter zum Dashboard
    window.location.href = "./dashboard.html";
});