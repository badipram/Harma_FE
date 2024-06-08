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
                    <label for="alamat">Alamat</label>
                    <input type="text" id="alamat" name="alamat" required>
                </div>

                <div class="form-input">        
                    <label for="tanggal">Tanggal Lahir</label>
                    <input type="date" id="tanggal_lahir" name="tanggal" required>
                </div>

                <div class="form-input">        
                    <label for="jenis_kelamin">Jenis Kelamin</label>
                    <select name="jenis_kelamin" id="jenis_kelamin">
                        <option value="L">Laki-laki</option>
                        <option value="P">Perempuan</option>
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
