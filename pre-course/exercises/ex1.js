/* Ex1 - printint the user input */
(function()
{
'use strict'; // for display errors

var input = require('readline-sync'); // unable readline repo

var name = input.question('Hi,\nWhat is your name?\n'); // saving the input as variable

console.log('Hello ' + name + '!');
}) ();

