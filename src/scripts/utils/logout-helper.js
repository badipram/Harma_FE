/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
import Swal from 'sweetalert2';
import { logout } from '../data/main';

const updateLoginStatus = () => {
  const token = localStorage.getItem('token');
  const loginLink = document.querySelector('a.login');
  if (token) {
    loginLink.textContent = 'Logout';
    loginLink.removeEventListener('click', handleLoginClick);
    loginLink.addEventListener('click', handleLogoutClick);
  } else {
    loginLink.textContent = 'Login';
    loginLink.removeEventListener('click', handleLogoutClick);
    loginLink.addEventListener('click', handleLoginClick);
  }
};

const handleLoginClick = (event) => {
  event.preventDefault();
  window.location.href = '#/login';
};

const handleLogoutClick = (event) => {
  event.preventDefault();
  Swal.fire({
    title: 'Konfirmasi Logout',
    text: 'Apakah Anda yakin ingin logout?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ya, logout',
    cancelButtonText: 'Batal',
  }).then((result) => {
    if (result.isConfirmed) {
      logout();
    }
  });
};

export { updateLoginStatus, handleLoginClick, handleLogoutClick };
