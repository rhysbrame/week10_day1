//----------------------T-A-S-K---1-----------------------
var name = 'Keith'; //Sets keith as the name

var printName = function() {//a function called printName
  console.log('My name is ' + name );//prepares the string and adds the variable name to create a new string
};

printName();// "My name is Keith"

//----------------------T-A-S-K---2-----------------------
score = 5;//sets 5 as the value for score

var result = function() {//a function called result
  var score = 3;//sets the local value for score 
  return score;//returns the value for score
};

console.log(result());// 3

//----------------------T-A-S-K---3-----------------------
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];//creates an array as a local variable

var listAnimals = function() {// defines a function called list animals
  myAnimals = ['Ducks', 'Dogs', 'Lions'];//re defines the array for myAnimals, and sets it globally
  for(var i=0;i<myAnimals.length; i++){//iterating through the array
    console.log(i + ": " + myAnimals[i]);//prepares to print index of the array a colon and then the value in each indexed place from the array
  }
}

listAnimals();// 0: Ducks etc...

//----------------------T-A-S-K---4-----------------------
var suspectOne = 'Jay';// creating the suspects as local variables with string values
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {//defines a function of all suspects
  var suspectThree = 'Harvey'//re defines the suspectThree local variable as Harvey
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();// prints: Suspects include: Jay, Val, Harvey, Rick
console.log( 'Suspect three is:' + suspectThree );// Prints: Suspect three is: Keith

//----------------------T-A-S-K---5-----------------------x
var detective = {//creates a detective hash
  name : 'Ace Ventura',//with key name: and value string
  pet : 'monkey'//key pet: and value string
};

var printName = function(detective) {//defines a function printName and passes through the detective object 
  return detective.name//accesses the detective object and returns value 'Ace Ventura' from the name key
};

var detectiveInfo = function() {//defines a function detective info
  detective['name'] = 'Poirot'//globally sets the name key to the string value of Poirot and changes the hash to an array
  return printName(detective);//calls the printName function, passes the detective object through and it. returns its key name which is the value Poirot
};

console.log(detectiveInfo());// prints: {name: Poirot, pet: monkey}

//----------------------T-A-S-K---6-----------------------x
var murderer = 'rick';//sets the vlue of murderer as rick

var outerFunction = function() {//defines a function called outerfunction
  var murderer = 'marc';//that sets the murderer locally as marc

  var innerFunction = function() {//defines a new function innerfunction
    murderer = 'valerie';//that globally sets murderer as valerie
  }

  innerFunction();//calls the innerfunction  
}

outerFunction();//calls the outer which calls the inner  
console.log('the murderer is ', murderer);// the murderer is valerie

//----------------------T-A-S-K---7-----------------------