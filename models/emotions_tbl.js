module.exports = function(sequelize, DataTypes){

var UserEmotions = sequelize.define("useremotions",{

    emotions:  {
        type: DataTypes.STRING,
        allowNull:false,
        primaryKey: true
    },
    emotion_font: {
        type:DataTypes.STRING,
        allowNull:false
    },
    emotion_color: {
        type:DataTypes.STRING,
        allownull:false},

    emotion_background_color:{
        type:DataTypes.STRING,
        allowNull: false
    } 


});
return UserEmotions;
};
