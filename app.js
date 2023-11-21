// npm -- global command come with node
// npm -- version

// local dependency -- use it only in this particular project
// npm i <package name>

// glocal dependency -- use it in any project
// npm i -g <package name>

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItem = _.flattenDeep(items);
console.log(newItem);

