# Todo-App
App for daily tasks
On second commit, I made quite a few changes to javaScript files todo.js and functions.js
in todo.js, I did the following:
Problem
Initially I encountered the problem of printing a new todo when a new todo wasn't entered. For example, a new todo would be 
added if no text was present and I clicked `add todo`. 
Solution
I was able overcame this problem by altering the section of my code that dealt with new todos. I used the `trim` method and moved code
into an if statement.

In functions. js I made changes to TODO DOM, which is responsible for generating TODO element on screen for each todo added. 
I switched element type from being a div to a label for styling purposes. In addition I created a new div for styling and this will enable user to access the check box next to a new todo without having to always click directly into the small box.

