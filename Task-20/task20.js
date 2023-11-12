var languages = ["JavaScript", "Python", "C++", "Go", "Java", "PHP"];
console.log("\nProgrammers needed for the following languages:-\n");
languages.forEach(function (language) { return console.log("(".concat(languages.indexOf(language) + 1, ") ").concat(language, "\n")); });
