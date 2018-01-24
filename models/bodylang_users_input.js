module.exports = function(sequelize, DataTypes) {
  var UserInput = sequelize.define("UserInput", {
    uaid: DataTypes.INTEGER,
    bodylang_user_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    }
  });

  UserInput.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
   UserInput.belongsTo(models.Bodylang, {
      foreignKey: {
        allowNull: false
      }
    });
  };
 return UserInput;
};
