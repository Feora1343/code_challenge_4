
var app = angular.module('StudentApp', []);

/** ---- CONTROLLER HERE ---- **/
app.controller('StudentController', ['$http', function($http){
  // studentList is a global variable array of student names
  // don't overthink this, you don't need a $http request
  // the array already exists right here

  // Renee: "Using const self = this; just like I did in my weekend challenge"
  const self = this;
  // @TODO: Write your controller code in here

  // Renee: "Having created the repo before the assignment was given to us,
  // I already made it like a server so I decided to run with it.
  // I know Hard Mode said to commit showing it was working before that, but
  // as I continued down this path I decided to move forward this way.""
  
  // Renee: "The Controller will require a GET since the student array is
  // not inside the client.js but instead in another file data.js"
  // Array will remain empty of course.
  self.studentList = [];

  // Renee: "Let us GET the student array, shall we?"
  self.getStudents = function() {
    $http({
      // Renee: "Need to remember to use METHOD and not TYPE here."
      method: 'GET',
      url: '/students'
    })
      // Renee: "Here we will assign the response.data to the empty self.studentList
      // array, now it won't be empty anymore and we can use it for our purposes."
      .then(function(response) {
        self.studentList = response.data;           
    });
  }

  // Renee: "Now that we have our student list array, we need to call it like we have
  // called previous arrays before."
  self.getStudents();

  // Renee: "A lot of what I call the back end of the back end pieces have
  // been set, now we need to get the show list function and then connected
  // to the html with a ng-click. I'm using the toggle I used
  // in my Weekend Challenge 4 assignment as a reference."

  self.showList = function() {
    self.hideList = !self.hideList;
  }

  // Renee: "I'm running into problems here because of my approach. 
  // However, I think if just continue building out the app it will fix
  // itself. Here I will make it sort when you press the button."
  self.orderDirection = 'name';
}])