const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

document.getElementById("showLogin").addEventListener("click", () => {
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
});

document.getElementById("showSignup").addEventListener("click", () => {
  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Login submitted!");
});

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Signup submitted!");
}

