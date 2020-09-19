const { DataTypes: DT } = require('sequelize');
const { Base } = require('./Base');

class Lesson extends Base {
    static schema = {
      id:      { type: DT.UUID, defaultValue: DT.UUIDV4, allowNull: false, primaryKey: true },
      type:    { type: DT.STRING },
      startAt:  { type: DT.DATE },
      finishAt: { type: DT.DATE },
      status:   { type: DT.STRING },
      costs:    { type: DT.INTEGER },

    }

    static options = {
      timestamps: true,
      paranoid: true
    }

    static initRelations(sequelize) {
      const LessonMaterials = sequelize.model('LessonMaterials');
      const User = sequelize.model('User');

      Lesson.hasMany = (LessonMaterials, {
        foreignKey: 'lesson_id'
      });

      Lesson.belongstoMany = (User, {
        through: 'UserMapLesson',
        foreignKey: 'lesson_id'
      });
    }
}

module.exports = { Lesson };
