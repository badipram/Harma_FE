/* eslint-disable import/no-cycle */
/* eslint-disable consistent-return */
import Swal from 'sweetalert2';
import { updateLoginStatus } from '../utils/logout-helper';

const BASE_URL = 'https://backend-harma-6f2e195012cd.herokuapp.com';

const tryLogin = async (login) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(login),
    };
    const response = await fetch(`${BASE_URL}/login`, options);
    const responseJson = await response.json();

    if (response.status === 200) {
      const { token } = responseJson;
      localStorage.setItem('token', token);
      updateLoginStatus();
      Swal.fire({
        icon: 'success',
        title: 'Login Berhasil',
        text: 'Anda berhasil login!',
        confirmButtonText: 'OK',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login Gagal',
        text: 'Username atau password salah.',
        confirmButtonText: 'OK',
      });
    }
    return responseJson;
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: 'Terjadi Kesalahan',
      text: 'Terjadi kesalahan saat mencoba login. Silakan coba lagi.',
      confirmButtonText: 'OK',
    });
  }
};

const logout = () => {
  localStorage.removeItem('token');
  updateLoginStatus();
  Swal.fire({
    icon: 'success',
    title: 'Logout Berhasil',
    text: 'Anda berhasil logout!',
    confirmButtonText: 'OK',
  });
};

window.addEventListener('DOMContentLoaded', updateLoginStatus);

const getAllPenduduk = async () => {
  try {
    const response = await fetch(`${BASE_URL}/penduduk`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

const getPendudukById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/penduduk/${id}`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

const getKepalaKeluarga = async () => {
  try {
    const response = await fetch(`${BASE_URL}/kepala-keluarga`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

const getKeluargaById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/keluarga/${id}`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

const addPenduduk = async (penduduk) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(penduduk),
    };
    const response = await fetch(`${BASE_URL}/penduduk/tambah`, options);
    const responseJson = await response.json();

    if (response.ok) {
      Swal.fire({
        title: 'Berhasil!',
        text: 'Penduduk telah berhasil ditambahkan.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } else {
      throw new Error(responseJson.message);
    }

    return responseJson;
  } catch (error) {
    console.error('Error saat menambahkan penduduk:', error);
    Swal.fire({
      title: 'Gagal!',
      text: 'Terjadi masalah saat menambahkan penduduk. Silakan coba lagi.',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }
};

const addKepalaKeluarga = async (id) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    };
    const response = await fetch(`${BASE_URL}/kepala-keluarga/tambah`, options);
    const responseJson = await response.json();

    if (response.ok) {
      Swal.fire({
        title: 'Berhasil!',
        text: 'Anggota keluarga telah berhasil ditambahkan.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } else {
      Swal.fire({
        title: 'Gagal!',
        text: responseJson.message || 'Terjadi masalah saat menambahkan anggota keluarga. Silakan coba lagi.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }

    return responseJson;
  } catch (error) {
    console.log(error);

    Swal.fire({
      title: 'Gagal!',
      text: 'Terjadi masalah saat menambahkan anggota keluarga. Silakan coba lagi.',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }
};

const addKeluarga = async (keluarga) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(keluarga),
    };
    const response = await fetch(`${BASE_URL}/keluarga/${keluarga.id_kepala_keluarga}/tambah`, options);
    const responseJson = await response.json();

    if (response.ok) {
      Swal.fire({
        title: 'Berhasil!',
        text: 'Anggota keluarga telah berhasil ditambahkan.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } else {
      Swal.fire({
        title: 'Gagal!',
        text: responseJson.message || 'Terjadi masalah saat menambahkan anggota keluarga. Silakan coba lagi.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }

    return responseJson;
  } catch (error) {
    console.log(error);

    Swal.fire({
      title: 'Gagal!',
      text: 'Terjadi masalah saat menambahkan anggota keluarga. Silakan coba lagi.',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }
};

const editPendudukById = async (penduduk, id) => {
  try {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(penduduk),
    };
    const response = await fetch(`${BASE_URL}/penduduk/${id}/edit`, options);
    const responseJson = await response.json();

    if (response.ok) {
      Swal.fire({
        title: 'Berhasil!',
        text: 'Data penduduk telah berhasil diperbarui.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } else {
      Swal.fire({
        title: 'Gagal!',
        text: responseJson.message || 'Terjadi masalah saat memperbarui data penduduk. Silakan coba lagi.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }

    return responseJson;
  } catch (error) {
    console.log(error);

    Swal.fire({
      title: 'Gagal!',
      text: 'Terjadi masalah saat memperbarui data penduduk. Silakan coba lagi.',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }
};

const deletePendudukById = async (id) => {
  const options = {
    method: 'DELETE',
  };
  try {
    const result = await Swal.fire({
      title: 'Apakah anda yakin ingin menghapus data penduduk ini?',
      text: 'Anda tidak akan dapat mengembalikan ini!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus saja!',
      cancelButtonText: 'Batal',
    });

    if (result.isConfirmed) {
      const response = await fetch(`${BASE_URL}/penduduk/${id}`, options);
      const responseJson = await response.json();
      console.log(responseJson);

      Swal.fire(
        'Terhapus!',
        'Data penduduk telah berhasil dihapus.',
        'success',
      );

      return responseJson;
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteKepalaKeluargaById = async (id) => {
  const options = {
    method: 'DELETE',
  };
  try {
    const result = await Swal.fire({
      title: 'Apakah anda yakin ingin menghapus data kepala keluarga ini?',
      text: 'Anda tidak akan dapat mengembalikan ini!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus saja!',
      cancelButtonText: 'Batal',
    });

    if (result.isConfirmed) {
      const response = await fetch(`${BASE_URL}/kepala-keluarga/${id}`, options);
      const responseJson = await response.json();
      console.log(responseJson);

      Swal.fire(
        'Terhapus!',
        'Data kepala keluarga telah berhasil dihapus.',
        'success',
      );

      return responseJson;
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteKeluargaById = async (id) => {
  const options = {
    method: 'DELETE',
  };
  try {
    const result = await Swal.fire({
      title: 'Apakah anda yakin ingin menghapus data keluarga ini?',
      text: 'Anda tidak akan dapat mengembalikan ini!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus saja!',
      cancelButtonText: 'Batal',
    });

    if (result.isConfirmed) {
      const response = await fetch(`${BASE_URL}/keluarga/${id}`, options);
      const responseJson = await response.json();
      console.log(responseJson);

      Swal.fire(
        'Terhapus!',
        'Data keluarga telah berhasil dihapus.',
        'success',
      );

      return responseJson;
    }
  } catch (error) {
    console.log(error);
  }
};

const tryAccessProtectedRoute = async (token) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${BASE_URL}/secured-route`, options);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return error;
  }
};

export {
  tryLogin, getAllPenduduk, getPendudukById, getKepalaKeluarga, getKeluargaById,
  addPenduduk, addKepalaKeluarga, addKeluarga, deletePendudukById, deleteKepalaKeluargaById, deleteKeluargaById, editPendudukById, tryAccessProtectedRoute, logout,
};
