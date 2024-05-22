const createPendudukTemplate = (penduduk) => `
    <div class="title" data-aos="fade-down">
        <h2>JUMLAH PENDUDUK KAMPUNG SERUT</h2>
    </div>
    <div class="wrapper-penduduk" data-aos="fade-up" data-aos-duration="1200">
        <div class="content-penduduk">
            <div class="item-penduduk" data-aos="fade-up" data-aos-duration="1200">
                <img src="./images/population.png" alt="">
                <h2>Total Penduduk <span id="totalPenduduk" class="countup" data-count="1500">0</span> Jiwa</h2>
            </div>
            <div class="item-penduduk" data-aos="fade-up" data-aos-duration="1200">
                <img src="./images/kepala keluarga.png" alt="">
                <h2>Kepala Keluarga <span id="kepalaKeluarga" class="countup" data-count="550">0</span> Jiwa</h2>
            </div>
            <div class="item-penduduk" data-aos="fade-up" data-aos-duration="1200">
                <img src="./images/perempuan.png" alt="">
                <h2>Perempuan <span id="perempuan" class="countup" data-count="660">0</span> Jiwa</h2>
            </div>
            <div class="item-penduduk" data-aos="fade-up" data-aos-duration="1200">
                <img src="./images/laki-laki.png" alt="">
                <h2>Laki-Laki <span id="lakiLaki" class="countup" data-count="840">0</span> Jiwa</h2>
            </div>
        </div>
    </div>
`;

export { createPendudukTemplate };
