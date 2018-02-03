
var ToneAnalyzerV3 = require("watson-developer-cloud/tone-analyzer/v3");

// var TextTranslation = require("public/assets/js/textTranslation.js");

var watsonRes = {};

var watsonScore = {};

var toneScore = [];

var toneRes = [];

var numTones;

var tone_analyzer = new ToneAnalyzerV3({
  username: "a024676d-1867-42c5-9fac-5908cc52cf02",
  password: "JEK6jBlRLqrN",
  version_date: "2016-05-19"
});

tone_analyzer.tone(
  {

    // tone_input: TextTranslation.emoText,
    tone_input: "I love everything",
    content_type: "text/plain"
  },
  function(err, tone) {
    if (err) {
      console.log(err);
    } else {
      
      numTones = JSON.stringify(tone.document_tone.tone_categories[0].tones[0].tone_name.length, null, 2);

      for (var i = 0; i < numTones; i++){

      watsonRes = JSON.stringify(tone.document_tone.tone_categories[0].tones[i].tone_name, null, 2);
      
      toneRes.push(watsonRes);

      }

      i = 0;

      for (i = 0; i < numTones; i++) {

        watsonScore = parseFloat(tone.document_tone.tone_categories[0].tones[i].score);

        toneScore.push(watsonScore);

      }

      
      var result = Math.max(...toneScore);

      

      console.log(result);

      console.log(toneRes);

      console.log(toneScore);

      console.log(toneScore.indexOf(result))

      console.log(toneRes[toneScore.indexOf(result)])

      var watEmo = toneRes[toneScore.indexOf(result)

        return watEmo
      
    }
  }
);


  
// toneRes = toneRes[maxIndex];

// var results = toneScore.indexOf(Math.max(toneScore));

// console.log(results);

module.export = ToneResults;