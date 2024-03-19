import inquirer from "inquirer";
// import prompt from "inquirer/lib/ui/prompt.js"
// tsc 
// node indexedDB.js
// ";
const prompt = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    { message: "Select one of the operators to perform action", type: "list", name: "operator", choices: ["addition", "subtraction", "multiplication", "division"] }
]);
// console.log(prompt);
// conditional statement
// if (answer.operator==="addition"),
// {console.log"your velue is" answer.firstNumber+answer.secondNumber}
if (prompt.operator === "addition") {
    console.log(prompt.firstNumber + prompt.secondNumber);
}
if (prompt.operator === "substraction") {
    console.log("Your value is", prompt.firstNumber - prompt.secondNumber);
}
if (prompt.operator === "multiplication") {
    console.log("Your value is", prompt.firstNumber * prompt.secondNumber);
}
if (prompt.operator === "division") {
    console.log("Your value is", prompt.firstNumber / prompt.secondNumber);
}
