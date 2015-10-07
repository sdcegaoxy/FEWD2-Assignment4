//COMM644
//Assignment 4
//
//Practice with JavaScript OOP Concepts (10 points)
//Within a new web page, create the following applications. Remember to comment out every application once you’ve finished with that step. Be sure to place all of your JavaScript code within an external script file:


////1.	Create a namespace called Animal. Then, define two sub namespaces, one called Cat and another called Dog.
//---------------------------------------------------------------------
//var Animal=Animal||{};
//Animal.Cat={};
//Animal.Dog={};
//---------------------------------------------------------------------

////2.	Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal syntax and the Dog class should be created using the constructor syntax.
//---------------------------------------------------------------------
//var Cat=function(){};
//function Dog(){};
//---------------------------------------------------------------------

////3.	Create a new instance of Cat class. Directly underneath, create a new instance of the Dog class.
//---------------------------------------------------------------------
//var cat=new Cat();
//var dog=new Dog();//Directly underneath, create a new instance of the Dog class.
//---------------------------------------------------------------------

//4.	Start over and now create a new class using literal syntax called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window. 
//---------------------------------------------------------------------
//var Animal=function(){
//    console.log("The Animal has been created");
//}
//var cat=new Animal();
//---------------------------------------------------------------------

//5.	Now, change the above code so that is mimics a true constructor. The class should accept an argument and that value is what should be displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.
//---------------------------------------------------------------------
//function Animal(message){
//    console.log(message);
//}
//var cat=new Animal("I want to create a cat");
//---------------------------------------------------------------------

//6.	Start over and now create a new class using literal syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation. 
//---------------------------------------------------------------------
//var Animal=function(type, breed, color, height,length){
//    this.Type=type;
//    this.Breed=breed;
//    this.Color=color;
//    this.Height=height;
//    this.Length=length;
//}
//var cat=new Animal("cat","black","white","5","15");
//---------------------------------------------------------------------

//7.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.
//---------------------------------------------------------------------
//var Animal=function(type, breed, color, height,length){
//    this.Type=type;
//    this.Breed=breed;
//    this.Color=color;
//    this.Height=height;
//    this.Length=length;
//}
//var cat=new Animal("cat","black","white","5","15");
//
//for (var x in cat){
//    console.log(cat[x]);
//}
//---------------------------------------------------------------------

//8.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.
//---------------------------------------------------------------------
//var Animal=function(type, breed, color, height,length){
//    var msgMap=new Map();
//    msgMap.set(1,"The <color> dog is barking!");
//    msgMap.set(2,"The <color> cat is meowing!");
//    var msg="";
//    
//    this.Type=type;
//    this.Breed=breed;
//    this.Color=color;
//    this.Height=height;
//    this.Length=length;
//    this.speak=function(){
//        if(this.Type.toLowerCase()=="dog"){
//            msg=msgMap.get(1).replace("<color>",this.Color);
//            console.log(msg);
//        }else if(this.Type.toLowerCase()=="cat"){
//            msg=msgMap.get(2).replace("<color>",this.Color);
//            console.log(msg);
//        }
//    }
//}
//
//var cat=new Animal("cat","black","white","5","15");
//cat.speak();
//var dog=new Animal("dog","white","black","10","30");
//dog.speak();
//---------------------------------------------------------------------

//9.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”
//---------------------------------------------------------------------
//var Animal=function(type, breed, color, height,length){   
//    var msg="The <animal type> has made a noise!";
//
//    var Type=type;
//    var Breed=breed;
//    var Color=color;
//    var Height=height;
//    var Length=length;
//    var checkType=function(){
//        if(Type.toLowerCase()=="dog"){
//           return "DOG";
//        }
//        else if(Type.toLowerCase()=="cat"){
//            return "CAT";
//        }
//    }
//    this.speak=function(){
//       msg=msg.replace("<animal type>",checkType());
//       console.log(msg);
//    }
//}
//
//var cat=new Animal("cat","black","white","5","15");
//cat.speak();
//var dog=new Animal("dog","white","black","10","30");
//dog.speak();
//---------------------------------------------------------------------

//10.	Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph.
//---------------------------------------------------------------------
//String.prototype.findWords=function(keyword){
//   var regExp=new RegExp(keyword,"g");
//   alert(this.match(regExp).length);
//} 
//
//var string="In this lab you will be build an application that determines whether or not your vehicle needs an oil change. If it does, it should alert the user of the fact within the console window. To complete this application, follow the steps outlined below";
//var keyword="the";
//string.findWords(keyword);
//---------------------------------------------------------------------

//Does My Vehicle Need An Oil Change? (10 points)
//In this lab you will be build an application that determines whether or not your vehicle needs an oil change. If it does, it should alert the user of the fact within the console window. To complete this application, follow the steps outlined below:
//11.	Create an abstract base class called Vehicle that accepts four parameters including make (string), model (string), total miles (number), and the mileage for the last oil change (number).
//12.	Within the Vehicle class, create 6 public properties named make, model, totalMiles, drivenMiles, type, and lastOilChange. Initialize the make, model, totalMiles, and lastOilChange properties with their respective arguments. The drivenMiles property should be initialized to 0 and the type property should be initialized to an empty string.
//13.	Now create a public method called drive() that accepts a parameter (perhaps miles). Increment and set the public drivenMiles property to the miles argument. Return the method (return this).
//14.	Now create a public method called checkOil(). Within this method, check to see if the total miles minus the last oil change plus the driven miles are less than or equal to 3000. If they are, return a message to the user that they need an oil change. Otherwise, return the method (return this).
//15.	Now create a new sub class called Car that accepts one parameter for the amount of doors that the car has. 
//16.	Within the new Car class, initialize a public property called doorCount and set it equal to the argument.
//17.	Within the Car class use a conditional to check and see if the door count is greater than 2. If it is, set the type property to Sedan. Otherwise, set it to coupe.
//18.	Now, make sure that the Car class inherits from the Vehicle base class. Use this opportunity to pass in the make, model, total miles, and last oil change values into the Vehicle’s constructor. 
//19.	Then, create a new instance of the Car class and pass in the number of doors that the car has into the Car’s constructor.
//20.	Finally, using method chaining, call the drive() method of the car object, passing in a numeric value as a parameter. At the same time, call the checkOil() method. Display the results in the console window. You will either get a message indicating your car needs an oil change or you will get the object hierarchy.
//--------------------------------------------------------------------- 
//var Vehicle = function(make,model,totalMiles,lastoilChange){
//    this.Make=make;
//    this.Model=model;
//    this.TotalMiles=totalMiles;
//    this.LastOilChange=lastoilChange;
//    this.DrivenMiles=0;
//    this.Type="";
//}
//Vehicle.prototype.drive = function(miles) {
//    this.DrivenMiles += miles;
//    return this;
//}
//Vehicle.prototype.checkOil=function(){
//        if((this.TotalMiles-this.LastOilChange+this.DrivenMiles)>=3000)         {
//            return "You need an oil change";
//        }else{
//            return this;
//        }
//}
//
//var Car = function(make,model,totalMiles,lastoilChange,doorCount) {
//        this.Make=make;
//        this.Model=model;
//        this.TotalMiles=totalMiles;
//        this.LastOilChange=lastoilChange;
//        this.DoorCount = doorCount;
//        this.Type="";
//        if(this.DoorCount>=2){
//            this.Type="Seden";
//        }else{
//            this.Type="Coupe";
//        }
//}
//
//Car.prototype = new Vehicle(Car.Make,Car.Model,Car.TotalMiles,Car.LastOilChange);
//
//var mycar=new Car("Ford","Fusion",1234560,1234560,4);
//console.log(mycar.drive(3000).checkOil());

//---------------------------------------------------------------------


//The Recipe Card (10 points)	
//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:
//Guacamole
//Serves: 4
//Ingredients: 
//- 3 Avocados
//- 1 Lime
//- 1 Teaspoon Salt
//- 1/2 Cup Onion
//- 3 Tablespoons Cilantro
//- 2 Diced Tomatoes
//- 1 Teaspoon Garlic
//- 1 Pinch Ground Pepper
//---------------------------------------------------------------------
//var Recipe=function(){
//    this.Title="Guacamole";
//    this.Serving=4;
//    this.Ingredients=[
//        "- 3 Avocados",
//        "- 1 Lime",
//        "- 1 Teaspoon Salt",
//        "- 1/2 Cup Onion",
//        "- 3 Tablespoons Cilantro",
//        "- 2 Diced Tomatoes",
//        "- 1 Teaspoon Garlic",
//        "- 1 Pinch Ground Pepper"
//    ];
//}
//
//Recipe.prototype.call=function(){
//    console.log(this.Title);
//    console.log("Serving"+this.Serving);
//    console.log("Ingredients:");
//    
//    for (var key in this.Ingredients){
//        console.log(this.Ingredients[key]);
//    }
//}
//    
//
//var myrecipe=new Recipe();
//myrecipe.call();
//---------------------------------------------------------------------

//The Reading List (10 points)
//Keep track of which books you read and which books you want to read! Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Then, use a conditional to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' Make sure your object contains at least 5 books.
//---------------------------------------------------------------------
//var booklist=[
//            {"title":"Finders Keepers ","author":"Stephen King","alreadyRead":true},
//            {"title":"In the Unlikely Event","author":"Judy Blume","alreadyRead":false},
//            {"title":"Once Upon a Time in Russia","author":"Ben Mezrich","alreadyRead":true},
//            {"title":"Palace of Treason ","author":"Jason Matthews","alreadyRead":false},
//            {"title":"The Coloring Book: A Comedian Solves Race Relations in America ","author":"Colin Quinn","alreadyRead":true},
//            {"title":"The Truth According to Us","author":"Annie Barrows","alreadyRead":false}
//          ];
//for (var x in booklist){
//   var book =booklist[x];
//   if(book.alreadyRead){
//       console.log( "You already read "+book.title+" by "+book.author);
//   }else{
//        console.log( "You still need to read "+book.title+" by "+book.author);
//   }
//}
//---------------------------------------------------------------------



//Fill in the Blanks (10 points)
//Fill in the blanks to make this program work.
//---------------------------------------------------------------------
//(function() {
//    var person = {
//        // add code here
//        buy:function(car){
//            if(car.price>100000){
//                console.log("I'm rich");
//            }
//        }
//    };
//
//    var car = {
//        // add code here
//        price:100001,
//        drive:function(car){
//        console.log("vroom vroom");
//       }
//    };
//
//    // print vroom vroom
//    car.drive();
//
//    // print 'I'm rich'
//    if (car.price > 100000) {
//        person.buy(car);
//    }
//}());
//---------------------------------------------------------------------