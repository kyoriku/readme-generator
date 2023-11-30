// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // Check if the license is 'None'
  if (license === 'None') {
    // If the license is 'None', return an empty string
    return '';
  } else {
    // Format the license string in the badge URL by replacing spaces with '%20'
    const formattedLicense = license.split(' ').join('%20');

    // Return a license badge with a link to the license
    return `[![License](https://img.shields.io/badge/License-${formattedLicense}-blue.svg)](${renderLicenseLink(license)})`;
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  // Check if the license is 'None'
  if (license === 'None') {
    // If the license is 'None', return an empty string
    return '';
  } else {
    // Format the license string in the license URL by replacing spaces with '-'
    const formattedLicense = license.split(' ').join('-');

    // Return the link to the selected license
    return `https://opensource.org/licenses/${formattedLicense}`;
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  // Check if the license is 'None'
  if (license === 'None') {
    // If the license is 'None', return an empty string
    return '';
  } else {
    // Return the license section with a link to the license
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

// Export generateMarkdown.js for use in other files
module.exports = generateMarkdown;