module.exports = {
  async validLogin(I) {
    I.seeElement('.login');
    I.click('.login');

    I.seeCurrentUrlEquals('/#/login');

    I.seeElement('#email');
    I.seeElement('#password');

    I.fillField('#email', 'badipram23@gmail.com');
    I.fillField('#password', 'badipram23');

    I.click('button[type=submit]');

    I.waitForElement('.swal2-popup', 5);
    I.see('Login Berhasil', '.swal2-popup');

    I.click('.swal2-confirm');
  },
};
