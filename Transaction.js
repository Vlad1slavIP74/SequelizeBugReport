const { DataTypes: DT } = require('sequelize');
const { Base } = require('./Base');

class Transaction extends Base {
    static schema = {
      id: { type: DT.INTEGER, autoIncrement: true, primaryKey: true },
      corespondency: { type: DT.JSON }
    }

    static initRelations(sequelize) {
      const Order = sequelize.model('Order');

      Transaction.hasMany = (Order, {
        foreign_key: 'transaction_id'
      });
    }


}

module.exports = { Transaction };
