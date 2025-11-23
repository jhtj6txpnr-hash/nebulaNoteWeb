console.log("register script geladen!");

document.getElementById("registerBtn").addEventListener("click", () => {
    const user = document.getElementById("newUser").value.trim();
    const pass = document.getElementById("newPass").value.trim();
    const pass2 = document.getElementById("newPass2").value.trim();

    if (!user || !pass || !pass2) {
        alert("Bruder, füll alles aus!");
        return;
    }

    if (pass !== pass2) {
        alert("Passwörter stimmen nicht überein!");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some(u => u.username === user)) {
        alert("Diesen Benutzer gibt es schon, G!");
        return;
    }

    users.push({ username: user, password: pass });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account erstellt, Bruder!");
    window.location.href = "./login.html";
});