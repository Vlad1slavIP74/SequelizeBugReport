const { Sequelize } = require('sequelize');

class Base extends Sequelize.Model {
  static init(sequelize, options = {}) {
    super.init(this.schema, { ...options, sequelize, ...this.options });
  }

  static initRelationsAndHooks(sequelize) {
    if (this.initRelations) {
      this.initRelations(sequelize);
    }
    if (this.initHooks) this.initHooks(sequelize);
  }
}
module.exports = {
  Base
};
