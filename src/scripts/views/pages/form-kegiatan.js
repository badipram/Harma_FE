/* eslint-disable camelcase */
import { addKegiatan } from '../../data/main';
import createFormKegiatan from '../templates/template-form-kegiatan-helper';

const FormKegiatan = {
  async render() {
    return createFormKegiatan();
  },

  async afterRender() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const nama_kegiatan = document.querySelector('#nama').value;
      const waktu_kegiatan = document.querySelector('#waktu').value;
      const tanggal_kegiatan = document.querySelector('#tanggal').value;
      const detail = document.querySelector('#deskripsi').value;
      const lokasi = document.querySelector('#lokasi').value;

      const kegiatan = {
        nama_kegiatan,
        waktu_kegiatan,
        tanggal_kegiatan,
        detail,
        lokasi,
      };

      try {
        await addKegiatan(kegiatan);
        window.location.href = '#/kegiatan'; // Arahkan ke halaman kegiatan setelah berhasil menambahkan kegiatan
      } catch (error) {
        console.error('Error saat menambahkan kegiatan:', error);
      }
    });
  },
};

export default FormKegiatan;
