import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

let options = ["Addition","Multiplication","Division","Substraction"];

// App starting function
async function calculator(){

  const rainbowTitle = chalkAnimation.rainbow('\n CLI Calculator \n');

  await sleep();
  rainbowTitle.stop();

inquirer
.prompt([
    {
        name: "options",
        type: "list",
        message: chalk.blue("Select your option"),
        choices: options,
    },
])
.then((answers) => {
    if (answers.options == "Addition") {
        addition()
    }else if (answers.options == "Multiplication") {
        multiplication();
    
    }else if (answers.options == "Substraction") {
        substraction();

    }else if (answers.options == "Division")   
      division();
  })
  .catch((error:any) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

}

//welcome();
calculator();

//Addtion Function
 const addition = ()=>{
  inquirer
    .prompt([
      {
        name: "first_number",
        type: "number",
        message: "Enter your first number: ",
      },
      {
        name: "second_number",
        type: "number",
        message: "Enter your second number: ",
      },
    ])
    .then((response)=>{
        let result = response.first_number + response.second_number;
        console.log(chalk.green("Your result is : "+result));
        restart();
    })
}

//multiplication function
 const multiplication = ()=>{
  inquirer
    .prompt([
      {
        name: "first_number",
        type: "number",
        message: "Enter your first number: ",
      },
      {
        name: "second_number",
        type: "number",
        message: "Enter your second number: ",
      },
    ])
    .then((response)=>{
        let result = response.first_number * response.second_number;
        console.log(chalk.green("Your result is : "+result));
        restart();
    })
}

// substraction function
 const substraction = ()=>{
  inquirer
    .prompt([
      {
        name: "first_number",
        type: "number",
        message: "Enter your first number: ",
      },
      {
        name: "second_number",
        type: "number",
        message: "Enter your second number: ",
      },
    ])
    .then((response)=>{
        let result = response.first_number - response.second_number;
        console.log(chalk.green("Your result is : "+result));
        restart();
    });
}

// division function
 const division = ()=>{
  inquirer
    .prompt([
      {
        name: "first_number",
        type: "number",
        message: "Enter your first number: ",
      },
      {
        name: "second_number",
        type: "number",
        message: "Enter your second number: ",
      },
    ])
    .then((response)=>{
        let result = response.first_number / response.second_number;
        console.log(chalk.green("Your result is : "+result));
        restart();
    })
}

const restart = ()=>{
  inquirer
    .prompt([
      {
        name: "continue",
        type: "confirm",
        message: chalk.red("Do you want to continue?")
      }
    ])
    .then((ans)=>{
      if(ans.continue == true){
        calculator();
      }else{
        console.log(chalk.yellow("\n Thank You For Using Our App!"))
        return;
      }
    });
}