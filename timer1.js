const input = process.argv.slice(2);

const alarm = () => {
  if (!input){
    return;
  }
  let timeout = 1000;
  for (const numb of input) {
    if (!Number(numb)){
      continue;
    }
    if (numb < 0){
      continue;
    }
    setTimeout(() =>  {
      process.stdout.write(numb+ ' seconds \n');
      process.stdout.write('\x07');
  }, timeout*numb); 
  }
};


alarm();
