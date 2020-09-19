const { DataTypes: DT } = require('sequelize');
const { Base } = require('./Base');

class User extends Base {
    static schema = {
      id:            { type: DT.STRING, primaryKey: true },
      role:          { type: DT.ENUM('ADMIN', 'ADULT', 'CHILD', 'COACH') },
      email:         { type: DT.STRING },
      'first_name':  { type: DT.STRING },
      'second_name': { type: DT.STRING },
    }
    static options = {
      timestamps: true,
      paranoid: true
    }

    // eslint-disable-next-line no-unused-vars
    static initRelations(sequelize) {
      // const UserCoach = sequelize.model('UserCoach');
      const UserChildren = sequelize.model('UserChildren');
      const Account = sequelize.model('Account');
      const UserInfo = sequelize.model('UserInfo');
      // const Lesson = sequelize.model('Lesson');
      const MusicInstruments = sequelize.model('MusicInstruments')


      // User.hasMany = (UserCoach, {
      //   foreignKey: 'coach_id'
      // });

      // User.hasMany = (UserCoach, {
      //   foreignKey: 'user_id'
      // });

      User.Adult = User.hasMany = (UserChildren, {
        foreignKey: 'user_id'
      });

    User.Children = User.hasMany = (UserChildren, {
        foreignKey: 'child_id'
      });

      User.hasMany = (Account, {
        foreignKey: 'user_id'
      });

     User.Info = User.hasOne(UserInfo, {
        foreignKey: 'user_id'
      });

      // User.belongstoMany = (Lesson, {
      //   through: 'UserMapLesson',
      //   foreignKey: 'user_id'
      // });

      User.MusicInstruments = User.belongstoMany = (MusicInstruments, {
        through: 'UserInstruments',
        as : "usersmth"
        // foreignKey: 'user_id'
      })
    }

}

module.exports = { User };
