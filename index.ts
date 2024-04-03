import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: "Enter your first Number", type: "number", name: "firstnumber" },
    { message: "Enter your second Number", type: "number", name: "secondNumber" },
    {
      message: "Select one of the operators to perform action",
      type: "list",
      name: "opertor",
      choices: ["Addition", "Subtraction", "Multiplication", "Divison"],
    },
  ]);
  
  if (answer.opertor === "Addition") {
      console.log (answer.firstnumber + answer.secondNumber);
      }
      else if (answer.opertor === "Subtraction") {
  console.log (answer.firstnumber - answer.secondNumber);
      }
      else if (answer.opertor === "Multiplication") {
        console.log (answer.firstnumber * answer.secondNumber);
      }
      else if (answer.opertor === "Divison") {
        console.log (answer.firstnumber / answer.secondNumber);
      }
  else {
    console.log ("Please select valid operator")
  }