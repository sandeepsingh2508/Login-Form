
import  './section'
const loginId = document.getElementById("loginId");
const password = document.getElementById("password");
const loginError = document.getElementById("loginId-error");
const passwordError = document.getElementById("password-error");
const submitbtn = document.querySelector(".login-btn");

const Validate = () => {
  loginId.addEventListener("keyup", () => {
    if (loginId.value === "") {
      loginError.style.display = "block";
    } else {
      loginError.style.display = "none";
    }
  });
  password.addEventListener("keyup", () => {
    if (password.value === "") {
      passwordError.style.display = "block";
    } else {
      passwordError.style.display = "none";
    }
  });
  submitbtn.addEventListener("click", () => {
    if (loginId.value === "") {
      loginError.style.display = "block";
    }
    if (password.value === "") {
      passwordError.style.display = "block";
    } else {
      loginError.style.display = "none";
      passwordError.style.display = "none";
      let cred = {
        loginId: `${loginId.value}`,
        password: `${password.value}`,
      };
      console.log(cred);
    }
  });
};
 export default Validate;
