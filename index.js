const inquirer = require("inquirer");
const fs = require("fs");
const createTeam = require("./src/template.js");
const Engineer = require("./lib/Engineer");
const IT = require("./lib/IT");
const Manager = require("./lib/Manager");

const newMember = [];

const questions = async () => {
  const answers = await inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name ?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your ID number ?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email ?",
        name: "email",
      },
      {
        type: "list",
        message: "What is your role ?",
        name: "role",
        choices: ["Engineer", "IT", "Manager"],
      },
    ])

      if (answers.role === "Manager") {
        const managerAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is your office number",
              name: "officeNumber",
            },
          ])
          const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAns.officeNumber
          );
          newMember.push(newManager);
          
      } else if (answers.role === "Engineer") {
        const githubAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is your GitHub user name?",
              name: "github",
            }
          ])
            const newEngineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              githubAns.github
            );
            newMember.push(newEngineer);
          
      } else if (answers.role === "IT") {
        const ITAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is your current domain",
              name: "domain",
            },
          ])
          
          const newIT = new IT(
            answers.name,
            answers.id,
            answers.email,
            ITAns.domain
          );
          newMember.push(newIT);          
      } 

}; 

async function promptQuestions() {
  await questions()
    
  
  const addMemberAns = await inquirer
    .prompt([
      {
        name:'addMember',
        type: 'list',
        choices: ['Add a new member', 'Create team'],
        message: "What would you like to do next?"
      }
    ])

    if (addMemberAns.addMember === 'Add a new member') {
      return promptQuestions()
    }
    return MakeTeam();
}  

promptQuestions();

function MakeTeam () {
  console.log("new guy", newMember)
  fs.writeFileSync(
    "./output/index.html",
    createTeam(newMember),
    "utf-8"
  );
}

