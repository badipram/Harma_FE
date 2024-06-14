/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
import Swal from 'sweetalert2';
import { logout } from '../data/main';
import { checkTokenLogin } from './function-helper';

const updateLoginStatus = async () => {
  // const token = localStorage.getItem('token');
  const loginLink = document.querySelector('a.login');
  const { error } = await checkTokenLogin();
  if (error) {
    loginLink.textContent = 'Login';
    loginLink.removeEventListener('click', handleLogoutClick);
    loginLink.addEventListener('click', handleLoginClick);
  } else {
    loginLink.textContent = 'Logout';
    loginLink.removeEventListener('click', handleLoginClick);
    loginLink.addEventListener('click', handleLogoutClick);
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
      localStorage.removeItem('token');
      window.location.href = '#/login';
    }
  });
};

export { updateLoginStatus, handleLoginClick, handleLogoutClick };
