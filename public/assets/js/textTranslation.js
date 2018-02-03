var db = require("models");
var ToneResults = require("../../../api.js");


// the purpose of this file is to grab the text input by the user, adn apply it to a new ID. 
// From there, we will grab the row associated with the emotion returned from Watson and apply the CSS
var emoText = $("#emotionalText")
var emoButton = $("#emoCheck")
var transText = $("#translationText")


// ON click event that applies the users text to #tanslationText.
    
$("emoButton").on(click, function (){
     $("transText").text(emoText)
        
    });

// grab CSS from DB
function getCSS() {
    
var dbEmotion = db.UserEmotions.emotions 

    if (ToneResults === dbEmotion) {
        return dbEmotion
    }





module.export = TextTranslation;