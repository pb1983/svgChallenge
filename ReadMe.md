# SVG Creator

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Links](#links)    

## Description

This project allows the user to create an SVG file using input they provide via the Inquirer prompt. Once the shape, text color(keyword of hex code), background color(keyword of hex code), and character string are supplied, a template is rendered with this information and displayed in the browser. In this challenge multiple js files were created in order to keep the code organized, with "module.exports" and "require" properties as the primary means of linking them together. Because of the similar criteria required to create the shapes, most of the class constructors were inherited from the parent function (Shape) to keep the code DRY. Unit Testing was also introduced to ensure that certain tasks execute as intended prior to deployment. 

## Installation

Node.js is required in order to access the prompt. To download the latest version of npm, on the command line, run the following command: 
"npm install -g npm". Once installed, the prompt can be run by typing "node index.mjs" in the terminal. 

## Links

[Repository](https://github.com/pb1983/svgChallenge)

[Walkthrough Video](https://drive.google.com/file/d/1r2EdgXeGodVQ651wxcPyGBu6KnhRgLRc/view)