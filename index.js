function punctuate(options) {

  const errorMessage = "Argument error: a string must be supplied, either as single string argument or as 'text' property on an object";

  try {
    var str = typeof(options) === "string"
      ? options
      : options.text;
  } catch(err) {
    throw new Error(errorMessage);
  }

  str = str
    .replacePeriod()
    .replaceQuestionMark()
    .replaceExclamationMark()
    .replaceComma()
    .replaceHyphen()
    .replaceColon()
    .replaceSemiColon()
    .removeEscapeCharacters()

  let shouldCapitalize = true; // Capitalize by default

  if (options.capitalize === false)
    shouldCapitalize = false;

  if (shouldCapitalize) {
    str = str.capitalizeFirst();
    str = str.capitalizeCharacterAfterPunctuation();
  }

  return str;
}

// Punctuation replacement methods
String.prototype.replacePeriod = function() {
  return this.toString().replace(/\speriod(?!([a-zA-Z]))|^(period)(?!([a-zA-Z]))/gi, ".");
};

String.prototype.replaceComma = function() {
  return this.toString().replace(/\scomma(?!([a-zA-Z]))|^(comma)(?!([a-zA-Z]))/gi, ",");
};

String.prototype.replaceQuestionMark = function() {
  return this.toString().replace(/\squestion\smark(?!([a-zA-Z]))|^(question\smark)(?!([a-zA-Z]))/gi, "?");
};

String.prototype.replaceExclamationMark = function() {
  return this.toString().replace(/\sexclamation(\smark|\spoint)?(?!([a-zA-Z]))|^(exclamation(\smark|\spoint)?)(?!([a-zA-Z]))/gi, "!");
};

String.prototype.replaceHyphen = function() {
  return this.toString().replace(/((\s)(hyphen|dash)(?!([a-zA-Z])))|^(hyphen|dash)(?!([a-zA-Z]))/gi, ($0, $1) => {
    if ($1 == undefined) {
      return "_";
    }
    return " -";
  });
};

String.prototype.replaceColon = function() {
  return this.toString().replace(/\scolon(?!([a-zA-Z]))|^(colon)(?!([a-zA-Z]))/gi, ":");
};

String.prototype.replaceSemiColon = function() {
  return this.toString().replace(/\ssemi-colon(?!([a-zA-Z]))|^(semi-colon)(?!([a-zA-Z]))/gi, ";");
};

String.prototype.removeEscapeCharacters = function() {
  return this.toString().replace(/\\(?=period|question\smark|(exclamation(\smark|\spoint)?)|comma|hyphen|dash|colon|semi-colon)/gi, "");
}

// Capitalization methods
String.prototype.capitalizeFirst = function() {
  return this.toString()[0].toUpperCase() + this.toString().substring(1);
};

String.prototype.capitalizeCharacterAfterPunctuation = function() {
  let str = this.toString();
  let regex = /(([^\.]\.)|\?|\!)\s([a-z])/gi;
  let results = [];
  while ((results = regex.exec(str)) !== null) {

    let index = results[2] == undefined
      ? results.index+2
      : results.index+3;

    str = str.substring(0, index) + results[3].toUpperCase() + str.substring(index+1);
  }

  return str;
}

module.exports = punctuate;