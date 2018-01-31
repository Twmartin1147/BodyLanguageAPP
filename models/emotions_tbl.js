module.exports = function(sequelize, DataTypes){

var UserEmotions = sequelize.define("useremotions",{

    emotions:  {
        type: DataTypes.STRING,
        allowNull:false,
        primaryKey: true
    },
    font_family: {
        type:DataTypes.STRING,
        allowNull:false
    },
    color: {
        type:DataTypes.STRING,
        allownull:false},

    background_color:{
        type:DataTypes.STRING,
        allowNull: false
    } 


});
return UserEmotions;
};
