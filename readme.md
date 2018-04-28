## What Are We Building It With?
We will be using a PEAN solution stack, except without a database.

```          
,________,         .----------,  _Request_    .---------,         
|________|       ,'_________,'|   -> | ->   ,'________,'|        
| HTML 5 |      | AngularJS | |      |      | _______ | |        
| CSS    |      |           | |      |      | Node.js | |        
| Boot   | <--  |           | |      |      | Express | |              
|  strap |      |           | ;   <- | <-   | _______ | ;        
|________|      |___________|'  _Response_  |_________|'         
  Client        Client Logic                   Server
        *Front End*                          *Back End*              
```

## Project Requirements
- [x] When page loads, user sees a `Display Students` button.
    - [x] When `Display Students` button is clicked, it will display the array of students as a list.
    - [x] Array of Students is stored in data.js
- [x] Add sorting button that will reverse the sorting from A to Z instead showing Z to A and back again if pressed again.
- [x] Commit code if you haven't done so yet.
- [x] Move list of students to the server and make a `$http` request for the data.
