function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Cek username dan password (hardcoded)
  if (username === "admin" && password === "123456") {
    alert("Login berhasil!");
    window.location.href = "https://google.com"; // redirect ke halaman lain
  } else {
    errorMessage.textContent = "Username atau password salah!";
  }
}