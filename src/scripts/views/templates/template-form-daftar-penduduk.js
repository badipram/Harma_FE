const createFormDaftarPenduduk = () => `
    <section class="form animate__animated animate__fadeInDown">
        <div class="wrapper-form">
            <div class="title">
                <h2>Tambah Penduduk</h2>
            </div>
            <form action="">
                <div class="form-input">        
                    <label for="nama">Nama</label>
                    <input type="text" id="nama" name="nama" required>
                </div>
                
                <div class="form-input">        
                    <label for="tanggal">Tanggal Lahir</label>
                    <input type="date" id="tanggal" name="tanggal" required>
                </div>

                <div class="form-input">
                <label for="status">Hubungan</label>
                <select class="status" name="status" required>
                    <option value="" disabled selected>Pilih Hubungan</option>
                    <option value="kepala-keluarga">Kepala Keluarga</option>
                    <option value="istri">Istri</option>
                    <option value="anak">Anak</option>
                </select>
            </div>
               
                <div class="form-button">
                    <button type="submit">Tambah Data</button>
                </div>
            </form>
        </div>
    </section>
`;

export default createFormDaftarPenduduk;
