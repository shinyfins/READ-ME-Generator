// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
    type:  "input",
    name: "name",
    message: "What is the name of the Repo?",
    default: "none",
    validate: nameinput => {
        if (nameinput) {
            return true;
        }
        else {
            console.log("Please cooperate, whats the repo name?");
            return false;
        }
    }

},
    {
    type: "input", 
    name: "description",
    message: "What is your description",
    validate: descriptioninput => {
        if (descriptioninput) {
            return true;
        }
        else {
            console.log("Please enter a description");
            return false;
        }
    }
},
    {
    type: "input",
    name: "install",
    message: "How do you install?",
    validate: installinput => {
        if (installinput) {
            return true;
        }
        else {
            console.log("Dont play games with me how do i install.");
            return false;
        }
    }
    },
    {
    type: "input",
    name: "usage",
    message: "What will you be using this for?",
    validate: usageinput => {
        if (usageinput) {
            return true;
        }
        else {
            console.log("Please englighten me on your usage.");
            return false;
        }
    }
    },
    {
    type: "input",
    name: "contribution",
    message: "How will you help out in the project?",
    validate: contributioninput => {
        if (contributioninput) {
            return true;
        }
        else {
            console.log("Please tell me how.");
            return false;
        }
    }
    },
    {
    type: "input",
    name: "instruct",
    message: "Guide me teach me instruct me how do i do this?",
    validate: instructinput => {
        if (instructinput) {
            return true;
        }
        else {
            console.log("I wont ask again, how do i do this!");
            return false;
        }
    }
    },
    {
    type: "checkbox",
    name: "license",
    message: "What license will we be using?",
    choices: ["MIT", "GNU", "Mozilla", "Open"],
    validate: licenseinput => {
        if (licenseinput) {
            return true;
        }
        else {
            console.log("License and registration please.");
            return false;
        }
    }
    },
    {
    tyep: "input",
    name: "github",
    message: "What is your git?",
    validate: githubinput => {
        if (githubinput) {
            return true;
        }
        else {
            console.log("Give me your git!!");
            return false;
        }
    }
    },
    {
        tyep: "input",
        name: "email",
        message: "What is your email?",
        validate: emailinput => {
            if (emailinput) {
                return true;
            }
            else {
                console.log("Give me your email!!");
                return false;
            }
    }
    },

    


];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
        throw err;
        console.log("ReadMe succesfully generated!")
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("ReadMe.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
