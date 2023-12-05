//in -line comment

/*
    multi line comment
*/

//it can used anywhere in program
var number = 5;
number = 8;

//it can be used within block or scope
let name = "Mike"

//constant , value cannot be modified
const pi = 3.14

//semicolon is not mandatory
//declaring
var a;
//declaring and assigning
var b = 2;

//extension -> live server -> bottom click on Go Live
//chrome -> inspect -> console
console.log("hello world");
console.log('checking logs');

var sum = 10 + 10;
console.log(sum);

//to increment we can use sum++; decrement sum--;

var decimal = 0.009;

a= 5;
a += 10;
console.log('adding a is : '+a);

//string
var str1 = "this is a string";
console.log(str1);

var str2 = "this is a \"string inside another\" string";
console.log(str2);

var str3 = 'this is a "another way of writing string within" string';
console.log(str3);

//using backtick we can use '' and "" , its above Tab 
var str4 = `this is a 'new day' and "beautiful day" string`;
console.log(str4);
var str5 = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(str5);

var str6 = "one sentence "+" second sentence";
console.log(str6);

//length of string
console.log(str6.length);
console.log(str6[0]);

//function
function word(firstWord , secondWord,thirdWord,fourthWord)
{
    //var result = firstWord +" "+ secondWord +" "+thirdWord +" "+fourthWord;
    var result = "";
    result +=  firstWord +" "+ secondWord +" "+thirdWord +" "+fourthWord;
    return result;
}
console.log("word is : "+word('hello','mike','and','lucy'));

//Array
var a1 = ['hello','mike',15];
console.log(a1);
//Nested Array
var a2 = [['hello','mike',15],['hello1','mike1',16],['hello2','mike2',17]];
console.log(a2);
console.log(a1[0]);

a1[0] = 45;
console.log(a1[0]);
console.log(a1);
console.log(a2[0][1]);

//push , adds element at last
a1.push(["ok","ok1"]);
console.log(a1);

a1.pop();   //removes last element
console.log(a1);

a1.shift();   //removes first element
console.log(a1);

a1.unshift("firstElement"); //adds element at first 
console.log(a1);
//console.log("stringify : "+JSON.stringify(a1));

//localScope
function myLocalScope()
{
    var myVar = 5;
    console.log(myVar);
}

myLocalScope();
// console.log("myVar : "+myVar);    //we get error

//Global , Local scope
var outerWear = "T-Shirt";

function myOutfit()
{
    var outerWear = "sweater";

    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

//triple equal sign
var val;
function testStrict()
{
    if(val === 7){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(10));


function compareEquality(a,b)
{
    if(a == b){ // == does type conversion 
        return "Equal";
    }
    return "Not Equal";
}

console.log("compareEquality : "+compareEquality(10,"10"));

//Object
var dog = {
    "name" : "Camper",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["everything"]
};


var dogName = dog.name;
var dogLegs = dog.legs;
var dogNameValue = dog["name"];
//console.log(dogNameValue);

//delete dog.tails;

var myObj = {
    gift : "pony",
    pet : "kitten",
    bed : "sleigh"
};

//hasOwnProperty
function checkObj(checkProp)
{
    if(myObj.hasOwnProperty(checkProp))
        return myObj[checkProp];
    else
        return "Not found";
}

// console.log("hasOwnProperty : "+checkObj("gift"));
// console.log("hasOwnProperty : "+checkObj("hello"));

const increment = (function() {
     return function increment(number,value = 1)
     {
        return number + value;
     };
})();
// console.log(increment(5,2));
// console.log(increment(5));


//Destructuring
const LOCAL_FORECAST = {
    today : { min: 72 , max : 83},
    tomorrow :  { min: 73.3 , max : 84.6}
};

function getMaxOfTmrw(forecast)
{
    const  {tomorrow : {max : maxOfTomorrow }} = forecast;
    return maxOfTomorrow;
}
 //console.log(getMaxOfTmrw(LOCAL_FORECAST));

 const source =  [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list)
{
    const [ , , ...arr] = list;
    return arr;
}

 const arr1 = removeFirstTwo(source);
//  console.log(arr1);
//  console.log(source);

//Template Literals
const person = {
    name : "Zodiac",
    age : 56
};

const greeting = `Hello , my name is ${person.name}!
I am ${person.age} years old.`;

//console.log(greeting);

//Class Constructor
function makeClass(){
    class Thermostat{
        constructor(temp){
            this._temp = 5/9 * (temp - 32); // this._ means variable is private
        }

        get temperature()
        {
            return this._temp;
        }

        set temperature(updatedTemp)
        {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;  //getter
//console.log(temp);
thermos.temperature = 26;  //setter
temp = thermos.temperature;
//console.log(temp);




