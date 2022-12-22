import inquirer from 'inquirer';
let todoList = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
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
    ]);
    const { TODO, addmore } = answers;
    loop = addmore;
    if (TODO) {
        todoList.push(TODO);
    }
    else {
        console.log("Enter Valid Input");
    }
}
if (todoList.length > 0) {
    console.log("Your Todo List:");
    todoList.map((eachItem) => {
        console.log(eachItem);
    });
}
else {
    console.log('No Data Found');
}
