var ToneAnalyzerV3 = require("watson-developer-cloud/tone-analyzer/v3");

var tone_analyzer = new ToneAnalyzerV3({
  username: "a024676d-1867-42c5-9fac-5908cc52cf02",
  password: "JEK6jBlRLqrN",
  version_date: "2016-05-19"
});

tone_analyzer.tone(
  {
    tone_input: "Greetings from Watson Developer Cloud!",
    content_type: "text/plain"
  },
  function(err, tone) {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(tone, null, 2));
    }
  }
);
