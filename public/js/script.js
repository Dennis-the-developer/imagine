const myButton = document.getElementById('btn');
myButton.onclick = function () {
    const name = prompt('Enter your full name.');
    document.getElementById('name').innerText = name;
}

// Variables
const pi = 3.142;
let name = 'Dennis Appah';
let age = 219;
let present = false;
console.log(name);

// Objects
const car = {
    numberPlate: 'GR-345-24',
    model: 'Bentley',
    color: 'red',
    weight: 50,
    weightUnit: 'KG',
    owner: {
        name: 'Dennis',
        driver: {
            name: 'Eli'
        }
    }
}

console.log(car.numberPlate);
console.log(car.owner.driver.name);
console.log(car);

car.owner.driver.name = 'Den';
console.log(car.owner.driver.name);

// Arrays
const tweet1 = {
    text: 'I am learning js today.',
    likes: 5,
    shares: 2,
    retweet: 1,
  }
  
  const tweet2 = {
    text: 'I am learning arrays today.',
    likes: 8,
    shares: 3,
    retweet: 0,
  }
  
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets[1];
  
  // Dates
  const today = new Date();
  today.toString();
  today.toLocaleDateString();
  today.getHours();
  
  // If/Else
  
  if(today.getHours() >= 15) {
    console.log('Class has ended');
  } else {
    console.log('Class is in session!');
  }
  
  // For Loop
  for (let i = 0; i <= 9; i++) {
    console.log('Notify friends!', i);
  }
  

  // Functions
//Defining functions
function login(username, password) {
  if (username == 'Dennis' && password == '1234') {
    return 'User is logged in!';
  } else if (username != 'Dennis') {
    return 'Invalid username';
  } else if (password != '1234') {
    return 'Invalid password';
  } else {
    return 'Invalid username or password!';
  }
}
//Invoking functions
login('Denns', '124');

//Basic arithmethic
12 + 34;
45 - 16;
7 * 12;
78 / 4;
78 % 4;

//Comparison operators
2 == '2';
2 === '2';
3 !== 2;

//Built in math functions
Math.round(37 / 24);
Math.floor(37 /24);
Math.ceil(37 / 24);
Math.random();
Math.max(12, 14, 202, 89);

// Order of operations
1 * 2 + 3 - 4 / 2 % 2

//Handling user inputs
1200 + number('250');  
  
//String concatenation
const firstname = 'Dennis ';
const lastname = ' Appah';
firstname.trim() + ' ' + lastname.trim();

//Template Literal
`${firstname.trim()} ${lastname.trim()}`;

//String method
firstname.length;
lastname.length;
`${firstname.trim()} ${lastname.trim()}`.length;
(firstname.trim() + ' ' + lastname.trim()).length;
firstname.toUpperCase();
lastname.charAt(0);

//string conversion
String(2014);

// Write a function that will add a participant to our google classroom
const participants = [];
function addparticipant(email){
//Check if email was provided
 if (!email){
   return 'Email not provided';
 }
  
// Check if email is valid
if (!email.includes('@')){
  return 'Invalid email provided';
 }
// Add email to the participants
 participants.push(email);
//Notifiy them via email
//Return response
return 'Participants added!';
}

//addParticipant('Dennis@gmail.com');

// Arrays in Javascript
const alphabets = ['A', 'B', 'C', 'D'];
alphabets.join(' ');
alphabets.join(' ').split(' ')

//Write a function that will take a user with firstname, lastname and return fullname;
const user = {
  firstname: 'Joe',
  lastname: 'Garner',
}
function fullname(user){
  return {
    ...user,
    fullname: `${user.firstname} ${user.lastname}`
  }
}

fullname(user);

//Array map
const users = [
  {firstname: 'Linda', lastname: 'Parker'},
  {firstname: 'Mark', lastname: 'Twaine'},
  {firstname: 'Oliver', lastname: 'Queen'},
  {firstname: 'Stephen', lastname: 'Grider'},
  {firstname: 'Elon', lastname: 'Musk'}
]
users.map(fullname);

//Map and return squares of numbers
function square(number){
  return number**2;
}

const numbers = [0,1,2,3,4,5]
numbers.map(square);


//Filter and return even numbers
function even(number){
  return number % 2 === 0;
}

numbers.filter(even);

// Write a function that takes a user with name and dateOfBirth and returns true if their birthday is today else else
// const user = {
//   name: 'Martin King',
//   dateOfBirth: '1980-06-12'
// }

function isBirthday(user){
  const today = new Date();
  const birthDate = new Date(user.dateOfBirth);
  if (today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate()){
    return true;
  } else {
    return false;
  }
}

isBirthday(user);

// Write a function that takes a user with name and dateOfBirth and returns happy birthday if their birthday is today else return not your day
function wishBirthDay(userName, userDateOfBirth){
  if (isBirthday(userDateOfBirth) === true){
    return `Happy birthday, ${userName}`;
  }
  else {
    return `Not your day, ${userName}`;
  }
}

wishBirthDay(user.name, user.dateOfBirth);

// Bottle class
class Bottle {
  constructor(color, shape, volume){
    this.color = color;
    this.shape = shape;
    this.volume = volume;
  }
  
  getInfo(){
    return `This is a ${this.color} ${this.shape} bottle with a capacity of ${this.volume}`;
  }
}

const bottle1 = new Bottle('black', 'circle', '300');
bottle1.getInfo();
const bottle2 = new Bottle('yellow', 'square', '100');
bottle2.getInfo();

