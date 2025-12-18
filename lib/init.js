import inq from "inquirer";

// Initializer class to handle user prompts
class Initializer {
  // Constructor to set up questions
  constructor() {
    this.questions = [
      {
        type: "input",
        name: "logoText",
        message: "Enter up to three characters for the logo text:",
        validate: function (input) {
          input.length <= 3 ? true : "Please enter up to three characters.";
        },
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter the text color (name or hex code):",
        validate: function (input) {
          return input ? true : "Text color cannot be empty.";
        },
      },
      {
        type: "list",
        name: "shape",
        message: "Choose a shape for the logo:",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color (name or hex code):",
        validate: function (input) {
          return input ? true : "Shape color cannot be empty.";
        },
      },
    ];
  }

  // Method to run the prompts
  run() {
    return inq.prompt(this.questions).then((answers) => {
      console.log("Generating logo with the following details:");
      console.log(answers);
    });
  }
}

export default { Initializer };
