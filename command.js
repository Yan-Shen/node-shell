var fs = require('fs');
command = {
  pwd: function() {
    process.stdin.on('data', function (data) {
      var cmd = data.toString().trim(); // remove the newline
      if(cmd === 'pwd'){
        var output = process.cwd();
        process.stdout.write(`${output}`)
        process.stdout.write('\nprompt > ');
      }
    });
  },
  date: function(){
    process.stdin.on('data', function (data) {
      var cmd = data.toString().trim(); // remove the newline
      if(cmd === 'date'){
        var output = Date();
        process.stdout.write(`${output}`)
        process.stdout.write('\nprompt > ');
      }
    });
  },
  ls: function(){
    process.stdin.on('data', function (data) {
      var cmd = data.toString().trim(); // remove the newline
      if(cmd === 'ls'){
        fs.readdir('.', function(err, files) {
          if (err) throw err;
          files.forEach(function(file) {
            process.stdout.write(file.toString() + "\n");
          })
          process.stdout.write("prompt > ");
        });
      }
    });
  },
  echo: function(){
    process.stdin.on('data', function (data) {
      var str = data.toString().trim(); // remove the newline
      var cmd = str.slice(0, str.indexOf(' '));
      var file = str.slice(str.indexOf(' ')+1);
      if(cmd === 'echo'){
        process.stdout.write(file + "\n");
          process.stdout.write("prompt > ");
      }
    })
  },
}


module.exports = command;
