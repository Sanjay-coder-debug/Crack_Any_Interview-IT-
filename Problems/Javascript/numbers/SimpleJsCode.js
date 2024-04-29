const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
  rl.question('Enter the second number: ', (num2) => {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    const sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
    
    rl.close();
  });
});
