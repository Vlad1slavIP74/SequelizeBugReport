const { seq } = require('async');
const { DataTypes: DT } = require('sequelize');
const { Base } = require('./Base');


class UserChildren extends Base {
    static schema = {
      id: { type: DT.INTEGER, autoIncrement: true, primaryKey: true },
      'child_id' : {type: DT.STRING},
      'user_id' : {type: DT.STRING}
    }

    static initRelations(sequelize) {

      const User = sequelize.model('User')

      UserChildren.User = UserChildren.belongsTo = (User, {
        foreignKey : 'child_id'
      })

    }
}

module.exports = { UserChildren };
