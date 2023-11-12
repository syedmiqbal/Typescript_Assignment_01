const languages : string[] = ["JavaScript", "Python", "C++", "Go", "Java", "PHP"];

console.log("\nProgrammers needed for the following languages:-\n");
languages.forEach((language) => console.log(`(${languages.indexOf(language)+1}) ${language}\n`));