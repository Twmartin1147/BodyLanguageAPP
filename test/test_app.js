var expect = require("chai").expect;
var TextTranslation = require("../TextTranslation");

describe("TextTranslation", function() {
    it("toneresults are same as database emtion", function() {
      expect(TextTranslation("dbemotion")).to.equal("toneresult");
    });
  
    it("toneresults are not the same same as database emotion", function() {
        expect(TextTranslation("dbemtoion")).to.not.equal("toneresult");
      });
