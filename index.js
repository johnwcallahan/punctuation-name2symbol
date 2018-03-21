function punctuate(text) {
  text = text.replace(/(\s[^\\]?period)|^(period)\s/gi, ".");
  text = text.replace(/(\s[^\\]?comma)|^(comma)\s/gi, ",");
  text = text.replace(/(\s[^\\]?question\smark)|^(question\smark)\s/gi, "?");
  text = text.replace(/(\s[^\\]?exclamation(\smark|\spoint)?)|^(exclamation(\smark|point))?\s/gi, "!");
  text = text.replace(/(\s[^\\]?hyphen|\s[^\\]?dash)|^(hyphen|dash)\s/gi, "-");
  text = text.replace(/(\s[^\\]?colon)|^(colon)\s/gi, ":");
  text = text.replace(/(\s[^\\]?semi-colon)|^(semi-colon)\s/gi, ";");

  text = text[0].toUpperCase() + text.substring(1);

  let regex = /(\.|\?|\!)\s([a-z])/gi;
  let results = [];
  while ((results = regex.exec(text)) !== null) {
    let index = (results.index)+2;
    text = text.substring(0, index) + results[2].toUpperCase() + text.substring(index+1);
  }

  return text;
}

module.exports = punctuate;