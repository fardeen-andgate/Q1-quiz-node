#! /usr/bin/env node
import inquirer from "inquirer";
import { apiquiz } from "./quizapi/api.js";
import chalk from "chalk";
import Welcome from "./clidesign/design.js";


Welcome()

let fetchApi = async (data:string) => {
    let fetchQuiz = await fetch(data)
    let res = await fetchQuiz.json()
    return res.results;
}

let apiData = await fetchApi(apiquiz)

async function startQuiz () {
    let score:number = 0

    let name = await inquirer.prompt({
        type: "input",
        name: "username",
        message: chalk.cyanBright("Please write your name")
    })

    for(let i = 0; i < 34 ; i++){
        let aswers = [...apiData[i].incorrect_answers, apiData[i].correct_answer]
        let ques = await inquirer.prompt([
            {
                type: "list",
                name : "quiz",
                message: apiData[i].question,
                choices: aswers.map((val:any) => val)
            }
        ]);
        if (ques.quiz === apiData[i].correct_answer){
            ++score
        }
    }
    console.log(chalk.greenBright(score))
}

startQuiz()