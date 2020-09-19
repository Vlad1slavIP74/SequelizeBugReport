const { DataTypes: DT } = require('sequelize');
const { Base } = require('./Base');


class MusicInstruments extends Base {
    static schema = {
      id: { type: DT.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: DT.STRING },
      description: { type: DT.STRING },
      image: { type: DT.STRING },
      slug: { type: DT.STRING }
    }

    static initRelations(sequelize) {
      const User = sequelize.model('User')
      
      MusicInstruments.associate = (models) => {
        Images.belongsTo(models.Creations, {
        foreignKey: 'idImagesCreation',
        sourceKey: 'id',
        onDelete: 'CASCADE',
    });
};
      
      
      MusicInstruments.belongstoMany = (User, {
        through: 'UserInstruments',
        as : "smth"
        // foreignKey: 'music_instrument_id'
      })
    }
}

module.exports = {
  MusicInstruments
};
