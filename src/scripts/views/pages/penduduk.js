import createDaftarPendudukTemplate from '../templates/template-daftar-penduduk-helper';
import { deletePendudukById, getAllPenduduk } from '../../data/main';
import { createPendudukElement } from '../../utils/function-helper';
import UrlParser from '../../routes/url-parser';

const Penduduk = {
  async render() {
    return createDaftarPendudukTemplate();
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const titlePenduduk = document.querySelector('.title h2');
    const title = document.querySelector('.title');
    const loadingElement = document.querySelector('.loading');
    const templateWarga = document.querySelector('.wrapper-daftar-penduduk');

    titlePenduduk.innerText = 'Daftar Penduduk';
    title.innerHTML += `
      <div class="btn-penduduk">
        <a id="btn-tambah-penduduk" href="/#/penduduk/tambah">Tambah Penduduk</a>
      </div>
    `;

    loadingElement.style.display = 'block';

    const penduduks = await getAllPenduduk();

    loadingElement.style.display = 'none';

    if (penduduks.length === 0) {
      templateWarga.innerHTML = '<h1 class="empty-message">Data masih kosong 😪</h1>';
    } else {
      penduduks.forEach((penduduk) => {
        createPendudukElement({
          penduduk,
          templateWarga,
          deleteData: deletePendudukById,
          getData: getAllPenduduk,
        });
      });
    }

    localStorage.setItem('route', url);
  },
};

export default Penduduk;
