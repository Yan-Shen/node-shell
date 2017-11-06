var fs = require('fs');
command = {
  pwd: function() {
        var output = process.cwd();
        process.stdout.write(`${output}`);
        process.stdout.write('\nprompt > ');
  },
  date: function(){
        var output = Date();
        process.stdout.write(`${output}`)
        process.stdout.write('\nprompt > ');
  },
  ls: function(){      
      fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
          process.stdout.write(file.toString() + "\n");
        })
        process.stdout.write("prompt > ");
      });
  },
  echo: function(file){     
        process.stdout.write(file + "\n");
        process.stdout.write("prompt > ");
  }
}


module.exports = command;
