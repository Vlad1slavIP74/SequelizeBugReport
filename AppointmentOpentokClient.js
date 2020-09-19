const { DataTypes: DT } = require('sequelize');
const { Base } = require('./Base');

class AppointmentOpentokClient extends Base {
    static schema = {
      id: { type: DT.INTEGER, autoIncrement: true, primaryKey: true },
      token_id: { type: DT.STRING },
      appointment_id: { type: DT.STRING },
      session_id: { type: DT.STRING }
    }
}

module.exports = {
  AppointmentOpentokClient
};
