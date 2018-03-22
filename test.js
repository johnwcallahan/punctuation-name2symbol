const chai = require("chai");
const punctuate = require("./index");

const expect = chai.expect;

describe("Period", () => {
  it("should replace punctuation name with correct symbol", () => {
    expect(punctuate("hello world period")).to.equal("Hello world.");
  });
  it("should capitalize next character after symbol by default", () => {
    expect(punctuate("hello world period how are you")).to.equal("Hello world. How are you");
  });
  it("should not capitalize if specified", () => {
    expect(punctuate({text: "hello world period how are you", capitalize: false})).to.equal("hello world. how are you");
  });
  it("should not capitalize the next character after an ellipsis", () => {
    expect(punctuate("hello world period period period what's up")).to.equal("Hello world... what's up");
  });
});


describe("Question mark", () => {
  it("should replace punctuation name with correct symbol", () => {
    expect(punctuate("hello world question mark")).to.equal("Hello world?");
  });
  it("should capitalize next character after symbol by default", () => {
    expect(punctuate("hello world question mark how are you")).to.equal("Hello world? How are you");
  });
  it("should not capitalize if specified", () => {
    expect(punctuate({text: "hello world question mark how are you", capitalize: false})).to.equal("hello world? how are you");
  });
});

describe("Exclamation point", () => {
  it("should replace punctuation name with correct symbol", () => {
    expect(punctuate("hello world exclamation point")).to.equal("Hello world!");
  });
  it("should capitalize next character after symbol by default", () => {
    expect(punctuate("hello world exclamation point how are you")).to.equal("Hello world! How are you");
  });
  it("should not capitalize if specified", () => {
    expect(punctuate({text: "hello world exclamation point how are you exclamation mark yo exclamation", capitalize: false})).to.equal("hello world! how are you! yo!");
  });
});

describe("Comma", () => {
  it("should replace punctuation name with correct symbol", () => {
    expect(punctuate("hello world comma")).to.equal("Hello world,");
  });
  it("should not capitalize next character", () => {
    expect(punctuate({text: "hello world comma how are you", capitalize: false})).to.equal("hello world, how are you");
  });
});

describe("Hyphen", () => {
  it("should replace punctuation name with correct symbol", () => {
    expect(punctuate("hello world hyphen")).to.equal("Hello world -");
  });
  it("should not capitalize next character", () => {
    expect(punctuate({text: "hello world hyphen how are you dash great", capitalize: false})).to.equal("hello world - how are you - great");
  });
});

describe("Colon", () => {
  it("should replace punctuation name with correct symbol", () => {
    expect(punctuate("hello world colon")).to.equal("Hello world:");
  });
  it("should not capitalize next character", () => {
    expect(punctuate({text: "hello world colon how are you", capitalize: false})).to.equal("hello world: how are you");
  });
});

describe("Semi-colon", () => {
  it("should replace punctuation name with correct symbol", () => {
    expect(punctuate("hello world semi-colon")).to.equal("Hello world;");
  });
  it("should not capitalize next character", () => {
    expect(punctuate({text: "hello world semi-colon how are you", capitalize: false})).to.equal("hello world; how are you");
  });
});

describe("Escape characters", () => {
  it("escaped names should not be transformed into symbols", () => {
    expect(punctuate("\\period \\question mark \\exclamation point \\exclamation mark \\exclamation \\comma \\hyphen \\dash \\colon \\semi-colon")).to.equal("Period question mark exclamation point exclamation mark exclamation comma hyphen dash colon semi-colon")
  });
  it("escape characters should be removed", () => {
    expect(punctuate("\\period \\question mark \\exclamation point \\exclamation mark \\exclamation \\comma \\hyphen \\dash \\colon \\semi-colon")).to.equal("Period question mark exclamation point exclamation mark exclamation comma hyphen dash colon semi-colon")
  });
  it("should not capitalize next character", () => {
    expect(punctuate({text: "hello world semi-colon how are you", capitalize: false})).to.equal("hello world; how are you");
  });
});