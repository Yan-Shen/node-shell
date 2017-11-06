var command = require('./command');
// Output a prompt
process.stdin.on('data', function (data) {
    var str = data.toString().trim(); // remove the newline
    if(str.indexOf(" ") !== -1){
      var cmd = str.slice(0, str.indexOf(' '));
      var file = str.slice(str.indexOf(' ')+1);
    }else{
      var cmd = str;
    }
    command[cmd] && command[cmd](file);
});
process.stdout.write('prompt > ');





// The stdin 'data' event fires after a user types in a line

