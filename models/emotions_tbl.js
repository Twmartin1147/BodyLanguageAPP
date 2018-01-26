module.exports = function(sequelize, DataTypes){

var UserEmotions = sequelize.define("pool_emotions",{

    emotions:  DataTypes.STRING,
    emotion_font: DataTypes.STRING,
    emotion_color: DataTypes.STRING,
    emotion_background_color: DataTypes.STRING,


});
return UserEmotions;
};