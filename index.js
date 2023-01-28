#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner} from "nanospinner";

let playername;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        "Hey!! Welcome To The Colorful World!\n"
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
    ${chalk.yellowBright('How To Play')}
    ${chalk.blue('I am a process on your computer.')}
    ${chalk.blue("You'll be given a set of questions.")}
    ${chalk.green('Answer them and have fun.')}
   `);
}

await welcome()

async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'what is your name?',
        default(){
            return 'Player';
        },
    });

    playername= answers.player_name;

}

await askName();

async function question1() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'Which planet is called the Red Planet?\n',
        choices: [
            'Jupiter',
            'Mars',
            'Venus',
            'Uranus',
        ],
    });

    return handleAnswer(answers.question_1 === 'Mars');
}


async function question2(){
    const answers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: 'The color of the chlorophyll which is present in plants is\n',
        choices:[
            'Yellow',
            'Red',
            'Green',
            'Brown'
        ],
    });
    return handleAnswer(answers.question_2 === 'Green');
}

async function question3(){
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: 'What is the color of the letters O and E in the logo of the search engine Google?\n',
        choices:[
            'Blue',
      'Green',
      'Yellow',
      'Red', 
        ],
    });
    return handleAnswer(answers.question_3 === 'Red');
}

async function question4(){
    const answers = await inquirer.prompt({
        name: 'question_4',
        type: 'list',
        message: 'How many squares of alternating colors are there on a chessboard?\n',
        choices:[
            '32',
      '64',
      '16',
      '8', 
        ],
    });
    return handleAnswer(answers.question_4 === '64');
}

async function question5(){
    const answers = await inquirer.prompt({
        name: 'question_5',
        type: 'list',
        message: 'Which hair color is the rarest naturally-occurring in hair?\n',
        choices:[
            'Red',
      'Black',
      'White',
      'Grey', 
        ],
    });
    return handleAnswer(answers.question_5 === 'Red');
}

async function question6(){
    const answers = await inquirer.prompt({
        name: 'question_6',
        type: 'list',
        message: 'What is the science of color called?\n',
        choices:[
            'Chromatics',
      'Colorimetry',
      'Colorography',
      'Both A and B', 
        ],
    });
    return handleAnswer(answers.question_6 === 'Both A and B');
}

async function question7(){
    const answers = await inquirer.prompt({
        name: 'question_7',
        type: 'list',
        message: 'Which reptile has the ability to change its color?\n',
        choices:[
            'Crocodile',
      'Frog',
      'Chameleon',
      'None of the above', 
        ],
    });
    return handleAnswer(answers.question_7 === 'Chameleon');
}

async function question8(){
    const answers = await inquirer.prompt({
        name: 'question_8',
        type: 'list',
        message: 'Identify the color which is not primary?\n',
        choices:[
            'Red',
      'Yellow',
      'Green',
      'Blue', 
        ],
    });
    return handleAnswer(answers.question_8 === 'Blue');
} 

async function question9(){
    const answers = await inquirer.prompt({
        name: 'question_9',
        type: 'list',
        message: 'What is the first color a baby sees?\n',
        choices:[
            'Red',
      'Black',
      'White',
      'Blue', 
        ],
    });
    return handleAnswer(answers.question_9 === 'Red');
}

async function question10(){
    const answers = await inquirer.prompt({
        name: 'question_10',
        type: 'list',
        message: 'What is the color to which mosquitoes are most attracted to?\n',
        choices:[
            'Red',
      'Black',
      'White',
      'Blue', 
        ],
    });
    return handleAnswer(answers.question_10 === 'Blue');
}
var c=0;
async function handleAnswer(isCorrect){
    const spinner = createSpinner("Checking answer ...").start();
    await sleep();

    if(isCorrect){
        spinner.success({text: `Nice work ${playername}!`});
        c=c+1;
    }else{
        spinner.error({text: `Opps! That's incorrect`});
        //process.exit(1);
    }
}

await question1();
await question2();
await question3();
await question4();
await question5();

const sleep2 = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
async function welcome2() {
    const rainbowTitle = chalkAnimation.rainbow(
        "Having fun? Answer five more questions!\n"
    );

    await sleep2();
    rainbowTitle.stop();
}
await welcome2();

await question6();
await question7();
await question8();
await question9();
await question10();





function winner()
{
  //console.log(c);
    console.clear();
    console.log(`Your score is ${c}/10`);
    const msg = `Congrats ${playername}`;

    figlet(msg,(err,data) =>{
        console.log(gradient.pastel.multiline(data));
    });
}
async function runner()
{
    console.clear();
    console.log(`Your score is ${c}/10`);
    const msg = `You've passed the game`;

    figlet(msg,(err,data)=>{
        console.log(gradient.pastel.multiline(data));
    });
}

async function loser()
{
    console.clear();
    console.log(`Your score is ${c}/10`);
    const msg = `Better Luck Next Time`;

    figlet(msg,(err,data)=>{
        console.log(gradient.pastel.multiline(data));
    });
}
if(c==10){
    
await winner();}
else if(c>=5){
    await runner();
}
else{
 await loser();
}