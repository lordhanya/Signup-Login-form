const container = document.getElementById('container');
const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const loginLink = document.querySelector('.login');
const signupLink = document.querySelector('.signup');

signUpBtn.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInBtn.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

loginLink.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    container.classList.add('show-login');
    container.classList.remove('show-signup');
  } else {
    container.classList.add('right-panel-active');
  }
});

signupLink.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    container.classList.add('show-signup');
    container.classList.remove('show-login');
  } else {
    container.classList.remove('right-panel-active');
  }
});