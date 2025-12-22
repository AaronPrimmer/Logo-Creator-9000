# Logo Creator 9000

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js Version](https://img.shields.io/badge/node-%3E%3D24.0.0-brightgreen)

A simple Node.js command-line application that generates custom SVG logos based on user input. Choose from three shapes (circle, triangle, or square), add your initials, and customize the colors to create a simple logo.

## Description

Logo Creator 9000 is a command-line tool that allows users to quickly generate SVG logos without the need for graphic design software. Perfect for developers who need simple, clean logos for their projects.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Demo](#demo)
- [Technologies](#technologies)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/logo-creator-9000.git
```

2. Navigate to the project directory:

```bash
cd logo-creator-9000
```

3. Install dependencies:

```bash
npm install
```

## Usage

Run the application using Node.js or npm:

```bash
node index.js
```

or

```bash
npm start
```

Follow the prompts to:

1. Enter up to 3 characters for your logo text
2. Choose a text color (color keyword or hexadecimal)
3. Select a shape (circle, triangle, or square)
4. Choose a shape color (color keyword or hexadecimal)

The application will generate a `logo.svg` file in the exports directory.

### Example

```bash
$ node index.js
? Enter logo text (up to 3 characters): ABC
? Enter text color: white
? Choose a shape: circle
? Enter shape color: #ff6b6b
Generated logo.svg
```

## Features

- ✨ Simple command-line interface
- 🎨 Support for color keywords and hexadecimal values
- 🔺 Three shape options: circle, triangle, and square
- 📝 Customizable text (up to 3 characters)
- 💾 Generates scalable SVG files
- ⚡ Fast and lightweight

## Demo

[![Aaron's Module 10 Challenge Video](https://img.youtube.com/vi/r0qtKWbi2-o/0.jpg)](https://youtu.be/r0qtKWbi2-o)

## Technologies

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Inquirer.js](https://www.npmjs.com/package/inquirer) - Interactive command-line prompts
- [Jest](https://jestjs.io/) - Testing framework

## License

This project is licensed under the MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Tests

Run the test suite using Jest:

```bash
npm test
```

## Questions

For questions or issues, please contact:

- GitHub: [@AaronPrimmer](https://github.com/AaronPrimmer)
- Email: aaronmprimmer@gmail.com

---

**Project Link:** [https://github.com/AaronPrimmer/Logo-Creator-9000](https://github.com/AaronPrimmer/Logo-Creator-9000)
