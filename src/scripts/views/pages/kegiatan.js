import { createKegiatanTemplate } from "../templates/template-kegiatan-helper"

const Kegiatan = {
    async render() {
        const kegiatanHTML = createKegiatanTemplate();
    return`
        <section class="kegiatan">${kegiatanHTML}</section>
    `;
    },
    // eslint-disable-next-line no-empty-function
    async afterRender() {},
};

export default Kegiatan;