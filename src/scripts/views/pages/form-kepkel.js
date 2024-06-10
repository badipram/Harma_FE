/* eslint-disable camelcase */
import { getAllPenduduk, addKepalaKeluarga } from '../../data/main';
import createFormGetPenduduk from '../templates/template-form-kepkel-helper';

const { customAlphabet } = require('nanoid');

const FormKepalaKeluarga = {
  async render() {
    return createFormGetPenduduk();
  },

  async afterRender() {
    const form = document.querySelector('form');
    const selectInput = document.querySelector('select');
    const penduduks = await getAllPenduduk();
    penduduks.forEach((penduduk) => {
      selectInput.innerHTML += `
        <option value="${penduduk.id_penduduk}">${penduduk.nama}</option>
      `;
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const nanoid = customAlphabet('0123456789', 9);
      const id_kepala_keluarga = nanoid();
      const id_penduduk = document.querySelector('#penduduk').value;

      try {
        await addKepalaKeluarga({ id_kepala_keluarga, id_penduduk });
      } catch (error) {
        console.error('Terjadi kesalahan saat menambahkan kepala keluarga:', error);
      }
    });
  },
};

export default FormKepalaKeluarga;
