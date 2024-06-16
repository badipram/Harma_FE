/* eslint-disable arrow-parens */
/* eslint-disable import/prefer-default-export */
import { pendudukItems } from '../../../public/total-penduduk';

const createPendudukTemplate = () => `
    <div class="title" data-aos="fade-down">
        <h2>JUMLAH PENDUDUK KAMPUNG SERUT</h2>
    </div>
    <div class="wrapper-penduduk" data-aos="fade-up" data-aos-duration="1200">
        <div class="content-penduduk">
            ${pendudukItems.map(item => `
                <div class="item-penduduk" data-aos="fade-up" data-aos-duration="1200">
                    <img src="${item.imgSrc}" alt="${item.alt}" loading="lazy">
                    <h2>${item.description} <span id="${item.alt.replace(/\s/g, '')}" class="countup" data-count="${item.count}">0</span> Jiwa</h2>
                </div>
            `).join('')}
        </div>
    </div>
`;

export { createPendudukTemplate };
