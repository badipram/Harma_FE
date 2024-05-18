import createFormFasilitas from '../templates/template-form-fasilitas-helper';

const FormFasilitas = {
  async render() {
    return createFormFasilitas();
  },

  async afterRender() {
    return '';
  },

};

export default FormFasilitas;
