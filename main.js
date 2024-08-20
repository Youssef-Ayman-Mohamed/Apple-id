// عناصر خاصة بكلمة المرور
let passwordToggle = document.querySelector(".password-toggle");
let passwordInput = document.getElementById("password");

// دالة لتبديل عرض كلمة المرور
function togglePassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    passwordToggle.textContent = "Show";
  }
}

// التحقق من قوة كلمة المرور عند فقدان التركيز
passwordInput.onblur = function () {
  let strongShow = document.getElementById("strong");
  let specialchar = /[@#$%^&*!]/;
  let numpers = /[0-9]/;
  let uppercase = /[A-Z]/;

  if (!specialchar.test(passwordInput.value)) {
    strongShow.textContent = "EASY: Include special characters";
    strongShow.style.color = "red";
  } else if (specialchar.test(passwordInput.value) && !numpers.test(passwordInput.value)) {
    strongShow.textContent = "MEDIUM: Include numbers";
    strongShow.style.color = "orange";
  } else if (specialchar.test(passwordInput.value) && numpers.test(passwordInput.value) && uppercase.test(passwordInput.value)) {
    strongShow.textContent = "STRONG: Good password!";
    strongShow.style.color = "green";
  }
};

// معالجة الضغط على زر المتابعة
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // إخفاء قسم إنشاء الحساب وإظهار قسم التحقق
  document.getElementById("createIDSection").classList.add("hidden");
  document.getElementById("verificationSection").classList.remove("hidden");

  // إظهار رقم الهاتف في رسالة التحقق
  let phoneNumber = document.querySelector("[placeholder='Phone Number']").value.slice(8);
  document.querySelector(".numperAlert").textContent = `Please enter the verification code sent to •••••-••••${phoneNumber}.`;
});

// الانتقال إلى الحقل التالي عند إدخال رمز التحقق
function moveToNextInput(currentInput) {
  if (currentInput.value.length === 1 && currentInput.nextElementSibling) {
    currentInput.nextElementSibling.focus();
  }
}
