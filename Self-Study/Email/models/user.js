const Sequelize = require("sequelize");

module.exports = class User extends (
  Sequelize.Model
) {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        password: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "users",
        modelName: "user",
        charset: "utf8",
        coLLate: "utf8_general_ci",
      }
    );
  }
};
