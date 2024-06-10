/* eslint-disable camelcase */
import { addKeluarga, getAllPenduduk } from '../../data/main';
import UrlParser from '../../routes/url-parser';
import createFormGetPenduduk from '../templates/template-form-kepkel-helper';

const { customAlphabet } = require('nanoid');

const FormKeluarga = {
  async render() {
    return createFormGetPenduduk();
  },

  async afterRender() {
    const title = document.querySelector('.title h2');
    title.innerText = 'Tambah Keluarga';
    const form = document.querySelector('form');
    const selectInput = document.querySelector('#penduduk');
    const button = document.querySelector('.form-button');
    const penduduks = await getAllPenduduk();
    penduduks.forEach((penduduk) => {
      selectInput.innerHTML += `
        <option value="${penduduk.id_penduduk}">${penduduk.nama}</option>
      `;
    });

    const elementHubungan = `
        <div class="form-input">
            <label for="hubungan">Hubungan dengan Kepala Keluarga</label>
            <select name="hubungan" id="hubungan">
                <option value="Istri">Istri</option>
                <option value="Anak">Anak</option>
                <option value="Kakak">Kakak</option>
                <option value="Adik">Adik</option>
            </select>
        </div>
    `;
    button.insertAdjacentHTML('beforebegin', elementHubungan);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const nanoid = customAlphabet('0123456789', 9);
      const id_keluarga = nanoid();
      const { id: id_kepala_keluarga } = UrlParser.parseActiveUrlWithoutCombiner();
      const id_anggota_keluarga = document.querySelector('#penduduk').value;
      const hubungan = document.querySelector('#hubungan').value;

      addKeluarga({
        id_keluarga, id_kepala_keluarga, id_anggota_keluarga, hubungan,
      });
    });
  },

};

export default FormKeluarga;
