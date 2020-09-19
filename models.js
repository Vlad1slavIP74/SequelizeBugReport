const { initAllModels } = require('./initAllModel');

const {
  User,
  Account,
UserChildren,
MusicInstruments,
UserInfo,
UserInstruments,
sequelize

} = initAllModels();

module.exports = {
  User,
  Account,
UserChildren,
MusicInstruments,
UserInfo,
UserInstruments,
sequelize
};

