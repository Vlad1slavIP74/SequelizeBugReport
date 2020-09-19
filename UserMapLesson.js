const { DataTypes: DT } = require('sequelize');
const { Base } = require('./Base');


class UserLessons extends Base {
    static schema = {
      id: { type: DT.INTEGER, autoIncrement: true, primaryKey: true }
    }
}

module.exports = { UserLessons };
