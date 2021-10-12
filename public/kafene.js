function logout() {
    if (typeof localStorage !== "undefined") {
        localStorage.removeItem("LOGIN_STATUS");
    }
    window.location.pathname = "/login.html";
}