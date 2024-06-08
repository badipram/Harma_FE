/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
const { User } = require('../models');

const validate = async ({ decoded }, request, h) => {
  try {
    const { email } = decoded.payload;
    const user = await User.findOne({
      where: { email: email },
    });
    if (!user) {
      return { isValid: false };
    }
    return { isValid: true };
  } catch (error) {
    console.error(error);
    return { isValid: false };
  }
};

module.exports = { validate };
