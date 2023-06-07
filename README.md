# LimeHome test


## Pre-requisites

- A recent version of [Node.js](https://nodejs.org/en/), installed via the official installer or the package manager of your choice.
- [Git](https://git-scm.com/), if you're a Windows user and haven't already installed it. Mac users can install Git and other basic command line tools using the `xcode-select --install` command, and update these to newer/better versions using [Homebrew](https://brew.sh/).
- A local copy of your project's Git repository. If you don't have an actual project to work with, make a new folder called `cypress-playground` or similar.
- (Optional) A code editor that supports [Intellisense code completion](https://docs.cypress.io/guides/tooling/IDE-integration.html#Intelligent-Code-Completion), such as [VS Code](https://code.visualstudio.com/).

## Setup
checkout the project.
git clone https://github.com/UvaBharathi20/limehome-tests.git
then cd limehome-tests

run the follwoing command to generate reports.
```
npm i --save-dev cypress-mochawesome-reporter
```

### Adding Cypress to your project

To permanently add Cypress to a project that is already using npm or yarn, run _one_ of the following commands to install Cypress as a development dependency:

```
npm install cypress --save-dev
yarn add cypress -D
```

If the project does not have a package.json, you will first need to run `npm init` or `yarn init`.

From there, add the following to the scripts section of your `package.json`:
```
"cypress": "cypress run --e2e",
"cypress:open": "cypress open --e2e"
```

This will allow you to launch the UI Test Runner using `npm run cypress:open` and the CLI Test Runner using `npm run cypress` (or their Yarn equivalents).

- You can also kick off a headless test run of the test suite using `npx cypress run`.

When a new version of Cypress becomes available, you can update it within your repo using `npm install --save-dev cypress@x.y.z` or `yarn upgrade cypress@x.y.z`, where `x.y.z` is the version of Cypress (e.g. `10.11.0`) you want to install.

