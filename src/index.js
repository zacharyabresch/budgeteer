import inquirer from 'inquirer';

const main = async () => {
  const questions = [
    { type: 'input', name: 'paydays[0]', message: 'What is your first pay day?' },
    { type: 'input', name: 'paydays[1]', message: 'What is your second pay day?' },
    { type: 'input', name: 'paychecks[0]', message: 'What is your first paycheck amount?' },
    { type: 'input', name: 'paychecks[1]', message: 'What is your second paycheck amount?' }
  ];

  const answers = await inquirer.prompt(questions);
  console.log(answers);
};

main();
