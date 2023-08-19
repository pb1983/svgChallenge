import inquirer from "inquirer";
import fs from "fs/promises";


let {characters, text_color, shapes, background_color} = await 
inquirer

    .prompt([
        
        {
            type: 'input',
            name: 'characters',
            message: 'Please type three characters that you would like to see appear in your shape.'
        },
        {
            type: 'input',
            name: 'text_color',
            message: 'Please provide a color for your text'
        },
        {
            type: 'list',
            name: 'shapes',
            message: 'Please select a shape',
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'background_color',
            message: 'Please provide a background color'
        },

        ])