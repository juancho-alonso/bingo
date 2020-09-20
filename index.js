var number = document.querySelector("#number");
var input = document.querySelector("#input");
var lines = document.querySelector("#lines");
var roundWinners = [];
var firstPrize = [];
var secondPrize = [];
var thirdPrize = [];

function randomNumber() {
    var randomNumber = Math.floor(Math.random() * 100);
   number.innerHTML = randomNumber;
}

function newLine() {
    var arr = []
    //Generate 5 random numbers
    for (let i = 0; i < 5; i++) {
        var randomNumber = Math.floor(Math.random() * 100);
        arr.push(randomNumber);
    }
    var parent = lines;
    var oneLine = document.createElement('div');
    oneLine.setAttribute('class', 'one-line');
    parent.appendChild(oneLine);
    var nameAndNumbers = document.createElement('div');
    nameAndNumbers.setAttribute('class', 'name-and-numbers');
    oneLine.appendChild(nameAndNumbers);
    var name = document.createElement('div');
    name.setAttribute('class', 'line-name');
    name.innerHTML = input.value;
    nameAndNumbers.appendChild(name);
    var numbers = document.createElement('div');
    numbers.setAttribute('class', 'line-numbers');
    nameAndNumbers.appendChild(numbers);
    for (let i = 0; i < arr.length; i++) {
        console.info("array", arr)
        var lineNumber = document.createElement('div');
        lineNumber.setAttribute('class', 'line-number');
        lineNumber.innerHTML = arr[i];
        numbers.appendChild(lineNumber);
    }
    var matches = document.createElement('div');
    matches.setAttribute('class', 'matches');
    matches.innerHTML = "0";
    oneLine.appendChild(matches);
    input.value = "";
}