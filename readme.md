# Project Planning and Management
Note: Created repo and file/folder structure before assignment was released.

## Base Mode
- [x] When page loads, user sees a `Display Students` button.
    - [x] When `Display Students` button is clicked, it will display the array of students as a list.
    - [x] Array of Students is stored in data.js

## Hard Mode
- [x] Add sorting button that will reverse the sorting from A to Z instead showing Z to A and back again if pressed again.

## Pro Mode
- [x] Commit code if you haven't done so yet.
- [x] Move list of students to the server and make a `$http` request for the data.

# Overview

For today's code challenge, you will be creating an Angular application that displays a list of students when a user clicks on the "Display Students" button. To get started, **fork** this repository and `npm install`.

# Baseline

When the page first loads, the user sees a "Display Students" button, but it has no functionality!

## TODO

When the "Display Students" button is clicked, display the array of students as a list (i.e. use `<li>` to display each student).

**IMPORTANT:** Look at the comments in *index.html* and *client.js* to see where to write your code. The data array is currently being stored in *data.js*.

It will look like [this mockup](https://ninjastorage.blob.core.windows.net/html/M9FLD/index.html#a6dc2c72-7210-8348-3a96-b0b0ec3434ef). Don't worry about centering the list.

## Considerations

Start by thinking about how you will bring the data into the HTML. Consider starting by getting your data to display on the page before implementing the show students functionality.

## Hard Mode

Add a button that reverses the sorting for the list (A - Z to Z - A) and back.

## Pro Mode

Move the list of students to the server and make a `$http` request for the data. **Commit your code before attempting this!** It's better to have a fully functional base mode than a partially complete pro mode.