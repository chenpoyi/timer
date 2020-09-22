const timer1 = function() {
  const userArgs = process.argv.slice(2);
  if (userArgs) {
    for (let arg of userArgs) {
      
      if (!isNaN(arg) && arg >= 0) {
        setTimeout(()=>process.stdout.write('\x07'), arg * 1000);

      }
    }
    //setTimeout(()=>process.stdout.write(' . '), arg * 1000);
  }
  
  
};

timer1();
