const createFormGetPenduduk = () => `
    <section class="form">
        <div class="wrapper-form">
            <div class="title">
                <h2>Tambah Kepala Keluarga</h2>
            </div>
            <form>
                <div class="form-input">        
                    <label for="penduduk">Penduduk</label>
                    <select name="penduduk" id="penduduk"></select>                    
                </div>
               
                <div class="form-button">
                    <button type="submit">Tambah Data</button>
                </div>
            </form>
        </div>
    </section>
`;

export default createFormGetPenduduk;
