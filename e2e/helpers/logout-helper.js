/* eslint-disable global-require */
module.exports = {
  async logoutHandler(I) {
    I.amOnPage('/#/beranda');

    I.seeElement('.login');
    I.click('.login');

    I.wait(1);

    I.waitForElement('.swal2-popup', 5);
    I.see('Konfirmasi Logout', '.swal2-popup');

    I.wait(1);

    I.click('.swal2-confirm');
  },
};
