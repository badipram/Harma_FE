const createFormFasilitas = () => `
    <section class="form">
        <div class="wrapper-form">
            <div class="title">
                <h2>Tambah Fasilitas</h2>
            </div>
            <form action="">
                <div class="form-input">        
                    <label for="nama">Nama Fasilitas</label>
                    <input type="text" id="nama" name="nama" required>
                </div>
                <div class="form-input">        
                    <label for="lokasi">Lokasi</label>
                    <input type="text" id="lokasi" name="lokasi" required>
                </div>
                <div class="form-input">        
                    <label for="gambar">Tambah Gambar</label>
                    <input type="file" id="gambar" name="gambar" required>
                </div>
                <div class="form-input">        
                    <label for="deskripsi">Deskripsi</label>
                    <textarea id="deskripsi" name="deskripsi" required></textarea>
                </div>
                <div class="form-button">
                    <button type="submit">Tambah Fasilitas</button>
                </div>
            </form>
        </div>
    </section>
`;

export default createFormFasilitas;
