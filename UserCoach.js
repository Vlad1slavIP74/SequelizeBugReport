const { DataTypes: DT } = require('sequelize');
const { Base } = require('./Base');


class UserCoach extends Base {
    static schema = {
      id: { type: DT.INTEGER, autoIncrement: true, primaryKey: true },
    }
}

module.exports = { UserCoach };
