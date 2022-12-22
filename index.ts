import inquirer from 'inquirer';

let todoList: string[];
let loop: boolean = true;

while (loop) {
    const answers: { TODO: string, addmore: boolean } = await inquirer.prompt([
        {
            type: 'input',
            name: 'TODO',
            message: 'What do you want to add in your todo? '
        },
        {
            type: 'confirm',
            name: 'addmore',
            message: 'Do you want to add more todo? ',
            default: false

        }
    ])
    const { TODO, addmore } = answers;
}