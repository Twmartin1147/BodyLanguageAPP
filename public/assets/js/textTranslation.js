var db = require("models")
var ToneResults = require("./../../../api.js")

// the purpose of this file is to grab the text input by the user, adn apply it to a new ID. 
// From there, we will grab the row associated with the emotion returned from Watson and apply the CSS
var emoText = document.getElementById("emotionalText")
var emoButton = document.getElementById("emoCheck")
var transText = document.getElementById("translationText")



//Go through the row and add the needed syntax

// ON click event that applies the users text to another div, then applys the CSS styling grabbed from the DB

    $("emoButton").on(click, function (){
        $("transText").val(emoText)
        // <!--$("transText").css()-->
    });





//var returnedEmo = toneRes[maxIndex]

// function textConverter () {
//     if (toneRes = "sad") {
//         $("#text1").addClass("sad")
//     }
// }

// fetch("/api/test").then(function(result){
//     console.log(result)
})
//phase 1 text box that says your emotion

module.export = TextTranslation