// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    const formattedLicense = license.split(' ').join('%20');

    return `[![License](https://img.shields.io/badge/License-${formattedLicense}-blue.svg)](${renderLicenseLink(license)})`;
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    const formattedLicense = license.split(' ').join('-');

    return `https://opensource.org/licenses/${formattedLicense}`;
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `This application is covered by the [${license}](${renderLicenseLink(license)}) license.`;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please contact [${data.githubUsername}](https://github.com/${data.githubUsername}) or email at ${data.email}.`;
}

module.exports = generateMarkdown;
