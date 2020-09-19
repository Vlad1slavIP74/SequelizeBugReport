const { DataTypes: DT } = require('sequelize');
const { Base } = require('./Base');

class Account extends Base {
    static schema = {
      id: { type: DT.INTEGER, autoIncrement: true, primaryKey: true },
      amount: { type: DT.INTEGER },
      type: { type: DT.INTEGER },
      subType: { type: DT.INTEGER }
    }
}

module.exports = {
  Account
};
