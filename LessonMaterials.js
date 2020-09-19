const { DataTypes: DT } = require('sequelize');
const { Base } = require('./Base');


class LessonMaterials extends Base {
    static schema = {
      id: { type: DT.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: DT.STRING }
    }
    con
}

module.exports = { LessonMaterials };
