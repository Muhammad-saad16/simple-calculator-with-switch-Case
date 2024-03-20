#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstname" },
    { message: "Enter Second number", type: "number", name: "secondname" },
    {
        message: "Select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
// conditional statment
if (answer.operator === "Addition") {
    console.log(answer.firstname + answer.secondname);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstname - answer.secondname);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstname * answer.secondname);
}
else if (answer.operator === "Division") {
    console.log(answer.firstname / answer.secondname);
}
else {
    console.log("Please select valid operator");
}
