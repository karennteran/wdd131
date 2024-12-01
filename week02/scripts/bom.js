const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______'); // I need to fill in the blank to reference the html element that is a unordered list element.

//holds each entries chapter title and associated delete button.
const li =document.createElement('li'); 

//delete button
const deleteButton = document.createElement('button');

//li element variable's textContent or InnerHTML with the input value.
li.textContent = input.value;

//the button textConten with X.
deleteButton.textContent ='X';

//Append the li element variable with the delete button.
li.append(deleteButton);

//append the li element variable to the unordered list in your html.
list.append(li);



