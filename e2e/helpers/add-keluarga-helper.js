module.exports = {
  async addingKeluarga(I) {
    I.seeElement('.dropdown-toggle');
    I.click('.dropdown-toggle');

    I.wait(1);

    I.waitForElement('.dropdown-content', 5);
    I.seeElement('.dropdown-content');
    I.click('.dropdown-content li a[href="#/penduduk"]');

    I.wait(1);

    I.seeCurrentUrlEquals('/#/penduduk');

    I.seeElement('.btn-penduduk');
    I.click('#btn-tambah-penduduk');

    I.wait(1);

    I.seeElement('#nama');
    I.seeElement('#alamat');
    I.seeElement('#tanggal_lahir');
    I.seeElement('#jenis_kelamin');

    I.wait(1);

    I.fillField('#nama', 'Lisa');
    I.fillField('#alamat', 'tangerang');
    I.fillField('#tanggal_lahir', '23-12-2001');
    I.selectOption('#jenis_kelamin', 'P');
    I.click('button[type=submit]');

    I.wait(1);

    I.waitForElement('.swal2-popup', 5);
    I.see('Berhasil', '.swal2-popup');

    I.wait(1);

    I.click('.swal2-confirm');
  },
};
