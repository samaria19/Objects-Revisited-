//Create a variable called myObject and assign 
//an object to it.

var myObject = {};

//Add two properties of firstName and lastName
//using dot notation
myobject.firstName
myobject.lastName




//Add two properties of hobbies and age 
//using bracket notation
//hobbies must be an array of at least 4 strings

myObject['age']= 16
myObject['hobbies']=['reading', 'poetry', 'movies','facetime']


//Print the myObject variable
console.log(myObject)



//Use a for in loop to print all of the keys of the object

for(var key in myobject){
  console.log(key)
}


///Use a for in loop to print all of the values of the object

for(var key in myObject){
  console.log(myObject[key])
}



/*
create an object that is about a specific car

Include: year, make, model, color and an array of features that you want your car to have

*/
var myCar = {
  year:2009
  make:'Nissan'
  model:'Altuma'
  color:'light blue'
  features:['gps', 'radio', 'super speed','4 door']
}
