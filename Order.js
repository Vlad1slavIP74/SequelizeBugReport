const { DataTypes: DT } = require('sequelize');
const { Base } = require('./Base');

class Order extends Base {
    static schema = {
      id: { type: DT.INTEGER, autoIncrement: true, primaryKey: true },
      amount: { type: DT.INTEGER },
      currency: { type: DT.ENUM('USD'), default: 'USD' },
      status: { type: DT.STRING },
    }
    static initRelations(sequelize) {
      const User = sequelize.model('User');

      Order.belongToUser = (User, {
        foreignKey: 'user_id'
      });

    }
}

module.exports = { Order };
