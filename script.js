const form = document.querySelector(".form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const addSuccessClass = (inputElement) => {
  inputElement.closest(".form-control").classList.remove("error");
  inputElement.closest(".form-control").classList.add("success");
  return true;
};

const addErrorClass = (inputElement, inputType) => {
  inputElement.closest(".form-control").classList.add("error");
  if (inputType === "username") {
    inputElement
      .closest(".form-control")
      .querySelector(".error-message").textContent =
      "Username must be at least 3 characters";
  }
  if (inputType === "email") {
    inputElement
      .closest(".form-control")
      .querySelector(".error-message").textContent = "Email is not valid";
  }

  if (inputType === "password") {
    inputElement
      .closest(".form-control")
      .querySelector(".error-message").textContent =
      "Password must be at least 6 characters";
  }
  if (inputType === "confirmPassword") {
    if (passwordInput.value === "") {
      inputElement
        .closest(".form-control")
        .querySelector(".error-message").textContent =
        "Confirming password is required";
    } else {
      inputElement
        .closest(".form-control")
        .querySelector(".error-message").textContent = "Passwords do not match";
    }
  }
  return false;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (usernameInput.value.length < 3) {
    addErrorClass(usernameInput, "username");
    // usernameInput.closest(".form-control").classList.add("error");
  } else {
    addSuccessClass(usernameInput);
  }

  if (!emailInput.value.includes("@")) {
    addErrorClass(emailInput, "email");
  } else {
    addSuccessClass(emailInput);
  }

  if (passwordInput.value.length < 6) {
    addErrorClass(passwordInput, "password");
  } else {
    addSuccessClass(passwordInput);
  }

  if (
    confirmPasswordInput.value === passwordInput.value &&
    passwordInput.value === ""
  ) {
    addErrorClass(confirmPasswordInput, "confirmPassword");
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    addErrorClass(confirmPasswordInput, "confirmPassword");
  } else {
    addSuccessClass(confirmPasswordInput);
  }
});
