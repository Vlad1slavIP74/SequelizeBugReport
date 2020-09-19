const cls                         = require('cls-hooked');
const Sequelize                   = require('sequelize');

const { User } = require('./User');
const { Account } = require('./Account');
const { UserChildren } = require('./UserChildren');
const { MusicInstruments } = require('./MusicInstruments');
const { UserInfo } = require('./UserInfo');
const { UserInstruments } = require('./UserInstruments');


const development =  {
  "username": "vlad",
  "password": "password",
  "database": "test",
  "host": "127.0.0.1",
  "dialect": "mysql",
  "port": 3306
}
Sequelize.useCLS(cls.createNamespace('sequelize-transactions-namespace'));

 function initAllModels() {
  const sequelize = new Sequelize("database_test", "test", "password", {
    host: "127.0.0.1",
    port: 5432,
    dialect: "postgres",
    logging: false,
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci'
    } });
    sequelize.sync({force: true}).then(res => console.log(res))

  const models = {
    User,
    Account,
    UserChildren,
    MusicInstruments,
    UserInfo,
    UserInstruments,
  };

  Object.values(models).forEach(model => {
    model.init(sequelize);
    // model.sync();
  });
  Object.values(models).forEach(model => model.initRelationsAndHooks(sequelize));

  return {
    ...models,
    sequelize
  };

}

module.exports = { initAllModels };
