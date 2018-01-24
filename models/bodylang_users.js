
module.exports = function(sequelize, DataTypes) {
    
  
var Bodylang = sequelize.define("BodyLang", {
    id: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    user_name: DataTypes.STRING,
    user_password: DataTypes.STRING,
    created_at: DataType.DATE
    });
    
    Bodylang.associate = function(models) {
       
       Bodylang.belongsToMany(models.UserInput, {through: models.UserInput,foreignKey:"body_lang_user_id"})
          
      };
    
    
// Syncs with DB
return Bodylang;
};
