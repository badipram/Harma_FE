/* eslint-disable no-undef */
import galeri from '../../../public/galeri';

const createGaleriTemplate = () => {
  const galeriItems = galeri.map((item) => `
      <div class="content-galeri" data-aos="fade-up" data-aos-duration="1200">
        <img src="${item.imgSrc}" alt="${item.imgAlt}" loading="lazy">
        <h2>${item.title}</h2>
        <span>${item.date}</span>
      </div>
    `).join('');

  return `
      <div class="title" data-aos="fade-down">
        <h2>GALERI TERKINI</h2>
      </div>
      <div class="wrapper-galeri" data-aos="fade-up" data-aos-duration="1200">
        <div class="list-galeri">
          ${galeriItems}
        </div>
      </div>
    `;
};

// eslint-disable-next-line import/prefer-default-export
export { createGaleriTemplate };
