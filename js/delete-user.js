const deleteAccountBtn = document.getElementById("deleteAccountBtn");

deleteAccountBtn.addEventListener("click", () => {
    const confirmDelete = confirm("Willst du deinen Account wirklich löschen? 🗑️");

    if (!confirmDelete) return;

    // Aktuell eingeloggter Benutzer
    const currentUser = localStorage.getItem("username");

    // Alle registrierten Benutzer laden
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Benutzer aus der Liste entfernen
    users = users.filter(u => u.username !== currentUser);

    // Neue Liste speichern
    localStorage.setItem("users", JSON.stringify(users));

    // Session löschen
    localStorage.removeItem("username");
    localStorage.removeItem("lastLogin");
    localStorage.removeItem("NebulaLoggedIn");

    alert("Account wurde gelöscht ❌");

    // Zurück zu Login
    window.location.href = "../html/login.html";
});