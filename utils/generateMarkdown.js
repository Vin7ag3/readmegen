// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    const licenseBadges = {
      "GNU AGPLv3": "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
      "GNU GPLv3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      "GNU LGPLv3": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
      "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    };
  
    const licenseBadge = data.license !== 'None' && licenseBadges[data.license] || '';

    const readmeContent = `
# ${data.title}
${licenseBadge}

## Description
${data.description}

## Table of Contents:

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributing](#contributing)

[Tests](#test)

[Questions](#contact-information)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.test}

## Contact Information
Github Username: ${data.userName}
Contact E-mail: ${data.userEmail}
`;

// return generated content
return readmeContent; 
}
// export generateMarkdown    
module.exports = generateMarkdown;
