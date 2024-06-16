/* eslint-disable no-shadow */
import fasilitas from '../../../public/fasilitas';

const createFasilitasTemplate = () => `
  <div class="title" data-aos="fade-down">
    <h2>FASILITAS</h2>
    <div class="btn-fasilitas">
      <a href="#/fasilitas">
        <button id="showALLFacility">Lihat Semua Fasilitas</button>
      </a>
    </div>
  </div>
  <div class="wrapper-fasilitas" data-aos="fade-up" data-aos-duration="1200">
    <div class="list-fasilitas">
      ${fasilitas.slice(0, 3).map((fasilitas) => `
        <div class="content-fasilitas" data-aos="fade-up" data-aos-duration="1200">
          <img src="${fasilitas.imgSrc}" alt="${fasilitas.imgAlt}" loading="lazy">
          <h2>${fasilitas.title}</h2>
          <p>${fasilitas.detail}</p>
        </div>
      `).join('')}
    </div>
  </div>
`;

const loadAllFasilitas = () => `
  ${fasilitas.map((fasilitas) => `
    <div class="content-fasilitas" data-aos="fade-up" data-aos-duration="1200">
      <img src="${fasilitas.imgSrc}" alt="${fasilitas.imgAlt}" loading="lazy">
      <h2>${fasilitas.title}</h2>
      <p>${fasilitas.description}</p>
    </div>
  `).join('')}
`;

export { createFasilitasTemplate, loadAllFasilitas };
