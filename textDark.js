
const Isuru = require('./config');
const fs = require('fs');
const chalk = require('chalk');

if (fs.existsSync('./textsew/' + Isuru.TEXT + '.json')) {
    console.log(
        chalk.green.bold('Loading ' + Isuru.TEXT + ' textDark...')
    );

    var json = JSON.parse(fs.readFileSync('./textDark/' + Isuru.TEXT + '.json'));
} else {
    console.log(
        chalk.red.bold('')
    );

    var json = JSON.parse(fs.readFileSync('./textDark/DARK.json'));
}

function getrule(file) {
    return json['STRINGS'][file];
}

module.exports = {
    textDark: json,
    getrule: getrule
}
