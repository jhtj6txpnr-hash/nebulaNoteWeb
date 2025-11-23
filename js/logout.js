function logout() {
    localStorage.removeItem("nebulaLoggedIn");
    window.location.href = "login.html";
}