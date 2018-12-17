import inquirer from 'inquirer';

const collectExpenses = async (expenses = []) => {
  const prompts = [
    { type: 'input', name: 'name', message: 'Expense name: ' },
    { type: 'input', name: 'amount', message: 'Expense amount: ' },
    { type: 'input', name: 'due', message: 'Expense due date: ' },
    { type: 'confirm', name: 'again', message: 'Enter another expense?', default: false }
  ];

  const { again, ...answers } = await inquirer.prompt(prompts);
  const newExpenses = [...expenses, answers];
  return again ? collectExpenses(newExpenses) : newExpenses;
};

const main = async () => {
  const questions = [
    { type: 'input', name: 'paydays[0]', message: 'What is your first pay day?' },
    { type: 'input', name: 'paydays[1]', message: 'What is your second pay day?' },
    { type: 'input', name: 'paychecks[0]', message: 'What is your first paycheck amount?' },
    { type: 'input', name: 'paychecks[1]', message: 'What is your second paycheck amount?' }
  ];

  const paychecks = await inquirer.prompt(questions);
  const expenses = await collectExpenses();

  console.log(paychecks);
  console.log(expenses);
};

main();
