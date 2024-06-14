module.exports = {
  async addingKepalaKeluarga(I) {
    I.seeElement('.dropdown-toggle');
    I.click('.dropdown-toggle');

    I.waitForElement('.dropdown-content', 5);
    I.seeElement('.dropdown-content');

    I.click('.dropdown-content li a[href="#/kepala-keluarga"]');

    I.seeCurrentUrlEquals('/#/kepala-keluarga');

    I.seeElement('.btn-penduduk');
    I.click('#tambah-kepala-keluarga');

    I.seeElement('#penduduk');

    I.selectOption('#penduduk', 'Pram');

    I.click('button[type=submit]');

    I.waitForElement('.swal2-popup', 5);
    I.see('Berhasil', '.swal2-popup');

    I.click('.swal2-confirm');
  },
};
