import createFormKepalaKeluarga from "../templates/template-form-kepkel-helper";

const FormKepalaKeluarga = {
  async render() {
    return createFormKepalaKeluarga();
  },

  async afterRender() {
    return '';
  },

};

export default FormKepalaKeluarga;
