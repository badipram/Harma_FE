import createFormKegiatan from '../templates/template-form-kegiatan-helper';

const FormKegiatan = {
  async render() {
    return createFormKegiatan();
  },

  async afterRender() {

  },
};

export default FormKegiatan;
