const { DataTypes: DT } = require('sequelize');
const { Base } = require('./Base');

class UserInfo extends Base {
    static schema = {
      id: { type: DT.INTEGER, autoIncrement: true, primaryKey: true },
      skills: { type: DT.STRING },
      about: { type: DT.STRING }

    }
}

module.exports = { UserInfo };
