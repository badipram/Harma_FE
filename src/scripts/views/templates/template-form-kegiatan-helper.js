const createFormKegiatan = () => `
    <section class="form animate__animated animate__fadeInDown">
        <div class="wrapper-form">
            <div class="title">
                <h2>Tambah Kegiatan</h2>
            </div>
            <form action="">
                <div class="form-input">        
                    <label for="nama">Judul Kegiatan</label>
                    <input type="text" id="nama" name="nama" required>
                </div>
                <div class="form-input">        
                    <label for="lokasi">Lokasi</label>
                    <input type="text" id="lokasi" name="lokasi" required>
                </div>
                <div class="form-input">        
                    <label for="tanggal">Tanggal</label>
                    <input type="date" id="tanggal" name="tanggal" required>
                </div>
                <div class="form-input">        
                    <label for="waktu">Waktu Mulai</label>
                    <input type="time" id="waktu" name="waktu" required>
                </div>
                <div class="form-input">        
                    <label for="deskripsi">Detail Kegiatan</label>
                    <textarea id="deskripsi" name="deskripsi" required></textarea>
                </div>
                <div class="form-button">
                    <button type="submit">Tambah Kegiatan</button>
                </div>
            </form>
        </div>
    </section>
`;

export default createFormKegiatan;
