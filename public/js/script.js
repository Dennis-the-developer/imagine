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
  
  
  
  
  
  
  
  
  
  