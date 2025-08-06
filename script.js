// Hamburger menu toggle
function toggleMenu() {
  const menu = document.getElementById("hamburgerMenu");
  menu.classList.toggle("active");
}

// Password validation popbox logic (only on signup page)
document.addEventListener('DOMContentLoaded', function() {
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const popbox = document.getElementById('password-popbox');
  const confirmPopbox = document.getElementById('confirm-password-popbox');
  const createBtn = document.getElementById('create-account-btn');

  if (passwordInput && confirmPasswordInput && popbox && confirmPopbox && createBtn) {
    function validatePassword() {
      const password = passwordInput.value;
      let errorMsg = '';
      if (password.length < 8) {
        errorMsg = 'Password must be at least 8 characters.';
      } else if (password.length > 24) {
        errorMsg = 'Password must be less than 24 characters.';
      }
      if (errorMsg) {
        popbox.textContent = errorMsg;
        popbox.style.display = 'block';
        return false;
      } else {
        popbox.style.display = 'none';
        return true;
      }
    }

    function checkPasswordMatch() {
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
      if (confirmPassword.length > 0 && password !== confirmPassword) {
        confirmPopbox.textContent = 'Passwords do not match.';
        confirmPopbox.style.display = 'block';
        return false;
      } else {
        confirmPopbox.style.display = 'none';
        return true;
      }
    }

    passwordInput.addEventListener('input', function() {
      validatePassword();
      checkPasswordMatch();
    });
    confirmPasswordInput.addEventListener('input', checkPasswordMatch);

    // Always keep popbox visible until valid, don't hide on blur

    createBtn.addEventListener('click', function(e) {
      const validPassword = validatePassword();
      const validMatch = checkPasswordMatch();
      if (!validPassword || !validMatch) {
        e.preventDefault();
      }
    });
  }
});
