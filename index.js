// Include packages needed for this application
const inquirer = require('inquirer'); // Inquirer is a package for interactive command-line user interfaces
const fs = require('fs'); // fs is the file system module for reading and writing files
const generateMarkdown = require('./utils/generateMarkdown'); // Import module for generating markdown

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Explain the installation process (if any):',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions on using your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide examples or instructions on how to run tests:',
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  // Use fs.writeFile to write data to a file
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      // If an error occurs during file writing, log the error to the console
      console.error(err);
    } else {
      // If the file is successfully written, log a success message to the console
      console.log(`${fileName} has been successfully generated!`);
    }
  });
}

// Function to initialize app
function init() {
  // Prompt the user for information using the 'inquirer' module
  inquirer.prompt(questions)
    .then((data) => {
      // Generate README content using the answers provided by the user
      const readmeContent = generateMarkdown(data);

      // Write README file using the generated content
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      // Log any errors during the inquirer prompt process to the console
      console.error(error);
    });
}

// Function call to initialize app
init();