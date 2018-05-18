'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the wonderful ${chalk.red('generator-wasd')} generator!`));

    const prompts = [
      {
        type: 'input',
        name: 'collectionName',
        message: 'what is the collection name?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('*'),
      this.destinationPath(`${this.props.collectionName}/`)
    );
    this.fs.copy(
      this.templatePath('gui'),
      this.destinationPath(`${this.props.collectionName}/gui`)
    );
  }

  install() {
    this.installDependencies({
      bower: false
    });
  }
};
