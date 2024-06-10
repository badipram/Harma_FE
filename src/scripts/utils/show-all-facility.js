import { createFasilitasTemplate, loadAllFasilitas } from '../views/templates/template-fasilitas-helper';

const renderFasilitas = () => {
  const container = document.querySelector('.fasilitas');
  if (container) {
    container.innerHTML = createFasilitasTemplate();

    const button = document.querySelector('#showALLFacility');
    button.addEventListener('click', () => {
      const listFasilitas = document.querySelector('.list-fasilitas');
      listFasilitas.innerHTML = loadAllFasilitas();
      button.style.display = 'none';
    });
  } else {
    console.error('Container with id "#container" not found.');
  }
};

export default renderFasilitas;
