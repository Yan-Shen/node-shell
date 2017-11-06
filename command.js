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
  },
  cat: function(file){
    fs.readFile('./'+file.toString(), (err, data) => {
      if (err) throw err;
      process.stdout.write(data);
    });
  },
  head: function(file){
    fs.readFile('./'+file.toString(), (err, data) => {
      if (err) throw err;
      var arr = data.toString().split("\n").slice(0, 5).join("\n");
      process.stdout.write(arr);
    });
  },
  tail: function(file){
    fs.readFile('./'+file.toString(), (err, data) => {
      if (err) throw err;
      var arr = data.toString().split("\n").slice(-5).join("\n");
      process.stdout.write(arr);
    });
  },
  sort:function(file){
    fs.readFile('./'+file.toString(), (err, data) => {
      if (err) throw err;
      var arr = data.toString().split("\n").sort().join("\n");
      process.stdout.write(arr);
    });
  },
  wc: function(file){
    fs.readFile('./'+file.toString(), (err, data) => {
      if (err) throw err;
      var arr = data.toString().split("\n");
      process.stdout.write(arr.length.toString());
    });
  },
  uniq: function(file){
    fs.readFile('./'+file.toString(), (err, data) => {
      if (err) throw err;
      var arr = data.toString().split("\n");
      var uniqArr = arr.filter(function(item, pos){
        return arr.indexOf(item) == pos;
      })
      process.stdout.write(uniqArr.join("\n"));
    });
  }
}


module.exports = command;
