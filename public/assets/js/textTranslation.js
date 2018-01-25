
// var score = JSON.parse(toneScore)

// var emotion = JSON.parse(toneRes)

var score = [.5, .21, .1, .01]

var emotion = ["sad", "angry", "happy", "joy"]
// var textColor = color associated with emotion
// var textFont = font pool assosciated with emotion


var maxIndex = 0;
function indexOfMax(score) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;

   
}

//var returnedEmo = toneRes[maxIndex]

function textConverter () {
    if (toneRes = "sad") {
        $("#text1").addClass("sad")
    }
}

$(document).ready(function(){
    if(){
    $("#happy").on("click", function(){
        if ()
        console.log($("#emotionText").val())
    });
    } else if () {
        $("#sad").on("click", function () {
            if ()
                console.log($("#emotionText").val())
        });
    } else if () {
        $("#angry").on("click", function () {
            if ()
                console.log($("#emotionText").val())
        });
    } else {
        $("#joy").on("click", function () {
            if ()
                console.log($("#emotionText").val())
        });
    }
});

//phase 1 text box that says your emotion