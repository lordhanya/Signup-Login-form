Swal.fire({
  icon: 'info',
  title: 'Just a Preview!',
  text: 'This is a UI-only webpage with no backend logic connected yet.',
  confirmButtonText: 'Got it!',
  confirmButtonColor: '#4f46e5',
  customClass: {
    popup: 'animate__animated animate__fadeInDown',
    title: 'font-semibold text-gray-800',
    confirmButton: 'rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all'
  },
  timer: 4000,
  timerProgressBar: true
});

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
