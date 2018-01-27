
module.exports = function(sequelize, DataTypes) {
    
//   Name of the table after define-change
var Bodylang_Users = sequelize.define("bodylang_users", {
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_password:{
    type: DataTypes.STRING,
    allowNull:false
    }
    });
    
    // Bodylang.associate = function(models) {
       
    //    Bodylang.belongsToMany(models.UserInput, {through: models.UserInput,foreignKey:"body_lang_user_id"})
          
    //   };
    
    
// Syncs with DB
return Bodylang_Users;
};
