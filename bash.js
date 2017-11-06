var command = require('./command');
// Output a prompt
process.stdout.write('prompt > ');
command.pwd();
command.date();
command.ls();
command.echo();

// The stdin 'data' event fires after a user types in a line

