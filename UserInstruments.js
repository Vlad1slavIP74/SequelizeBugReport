const { DataTypes: DT } = require('sequelize');
const { Base } = require('./Base');


class UserInstruments extends Base {
    static schema = {
      id: { type: DT.INTEGER, autoIncrement: true, primaryKey: true },
      'user_id':  { type: DT.STRING },
      'music_instrument_id':  { type: DT.INTEGER },
    
    }
}

module.exports = { UserInstruments };
