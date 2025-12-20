const inquirer = require("inquirer");
const fs = require("fs");
const SVG = require("./svg.js");
const { Circle, Triangle, Square } = require("./shapes");

// Initializer class to handle user prompts
class Initializer {
  constructor() {
    // Any initialization if needed
    this.questions = [
      {
        type: "input",
        name: "logoText",
        message: "Enter up to three characters for the logo text:",
        validate: (text) =>
          text.length <= 3 ||
          "The message must not contain more than 3 characters",
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter the text color (name or hex code(#)):",
        validate: (input) => input !== "" || "Text color cannot be empty.",
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
        message: "Enter the shape color (name or hex code(#)):",
        validate: (input) => input !== "" || "Shape color cannot be empty.",
      },
    ];
  }
  // Method to run the prompts
  run() {
    return inquirer
      .prompt(this.questions)
      .then((answers) => {
        console.log("Generating logo with the following details:");
        // console.log(answers);
        let shape;
        let textColor = answers.textColor;
        const textColorRegex = /^([a-f0-9]{6}|[a-f0-9]{3})$/i;
        if (textColorRegex.test(textColor)) {
          textColor = `#${textColor}`;
        }

        switch (answers.shape) {
          case "Circle":
            const circle = new Circle();
            circle.setColor(answers.shapeColor);
            shape = circle.render();
            break;
          case "Triangle":
            const triangle = new Triangle();
            triangle.setColor(answers.shapeColor);
            shape = triangle.render();
            break;
          case "Square":
            const square = new Square();
            square.setColor(answers.shapeColor);
            shape = square.render();
            break;
        }
        if (shape) {
          const svg = new SVG(
            300,
            200,
            shape,
            answers.logoText,
            textColor,
            answers.shape
          ).createSVGElement();

          fs.writeFile("./exports/logo.svg", svg, () => {});
          console.log("Generated logo.svg!");
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }
}

module.exports = { Initializer };
