import { loadAllFasilitas } from '../templates/template-fasilitas-helper';

const AllFasilitas = {
  async render() {
    return `
      <section class="all-fasilitas">
        <div class="title" data-aos="fade-down">
          <h2>SEMUA FASILITAS</h2>
        </div>
        <div class="wrapper-fasilitas" data-aos="fade-up" data-aos-duration="1200">
          ${loadAllFasilitas()}
        </div>
      </section>
    `;
  },

  async afterRender() {
    // Tambahkan kode jika ada yang perlu dijalankan setelah render
  },
};

export default AllFasilitas;
