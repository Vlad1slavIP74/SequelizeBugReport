const { Sequelize } = require('sequelize');

class Base extends Sequelize.Model {
  static init(sequelize, options = {}) {
    console.log(this, typeof this, typeof this.name)
    super.init(this.schema, { ...options, sequelize, modelName:this.name, ...this.options });
  }

  static initRelationsAndHooks(sequelize) {
    if (this.initRelations) {
      this.initRelations(sequelize);
    }
    if (this.initHooks) this.initHooks(sequelize);
  }
}
module.exports = { Base };
