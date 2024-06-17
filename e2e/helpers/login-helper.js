module.exports = {
  async validLogin(I) {
    I.seeElement('.login');
    I.click('.login');

    I.wait(1);

    I.seeCurrentUrlEquals('/#/login');

    I.wait(1);

    I.fillField('#email', 'badipram23@gmail.com');
    I.fillField('#password', 'badipram23');

    I.wait(1);

    I.click('button[type=submit]');

    I.wait(1);

    I.waitForElement('.swal2-popup', 5);
    I.see('Login Berhasil', '.swal2-popup');

    I.click('.swal2-confirm');

    I.wait(1);
  },
};
