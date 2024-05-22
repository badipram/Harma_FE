import createFormDaftarPenduduk from "../templates/template-form-daftar-penduduk";

const FormDaftarPenduduk = {
  async render() {
    return createFormDaftarPenduduk();
  },

  async afterRender() {
    return '';
  },

};

export default FormDaftarPenduduk;
