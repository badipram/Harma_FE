/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { motoItems } from '../../../public/moto';

const createMotoTemplate = () => `
   <div class="title" data-aos="fade-down" data-aos-duration="1200">
    <h2>MOTO</h2>
    </div>
    <div class="moto-grid">
        ${motoItems.map((item, index) => `
            <div class="moto-item" data-aos="fade-up" data-aos-duration="1200">
                <div class="logo">
                    <img src="${item.imgSrc}" alt="${item.alt}" loading="lazy">
                </div>
                <div class="description">
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('')}
    </div>
`;

export { createMotoTemplate };
