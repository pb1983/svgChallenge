import inquirer from "inquirer";
import fs from "fs/promises";
import pkg from './svg.js';
const SVG = pkg;


let {characters, text_color, shape_choice, background_color} = await

    inquirer.prompt([
        
        {
            type: 'input',
            name: 'characters',
            message: 'Please type three characters that you would like to see appear in your shape'
                       
        },            
        {
            type: 'input',
            name: 'text_color',
            message: 'Please provide a color for your text'
        },
        {
            type: 'list',
            name: 'shape_choice',
            message: 'Please select a shape',
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'background_color',
            message: 'Please provide a background color'
        },

            
        ])

    

        let example = new SVG(`${background_color}`, `${text_color}`, `${characters}`, `${shape_choice}`);

        fs.writeFile("logo.svg", example.shape, function(err){
            if(err)
            console.log(err)
        })
        
        console.log("Generated 'logo.svg'");
