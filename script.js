setGlobalVariables();

//read and set global variables
 function setGlobalVariables() {
   consoleOut("Global Variables set ...");
   var day = document.getElementById("day").value;
   var dayPart = document.getElementById("dayPart").value;
   var exampleData = document.getElementById("exampleData").value;
   var inputData = document.getElementById("inputData").value;
 }

//load data for the specified day
function loadData() {
  let fDay = day.value;
  let fDayPart = dayPart.value;
  
  consoleOut("loading data...");
  let exampleDataFile = "input/day" + fDay + "." + fDayPart + "-example.txt";
  let inputDataFile = "input/day" + fDay + "-input.txt";
  consoleOut("exampleDataFile: " + exampleDataFile);
  consoleOut("inputDataFile: " + inputDataFile);
  $("#exampleData").load(exampleDataFile);
  $("#inputData").load(inputDataFile);
}

//execute example
function runExample() {
  consoleOut("Running example ...");
  setGlobalVariables();
  runCode("example", Number(day.value), Number(dayPart.value), exampleData.value, inputData.value);
}

//execute input
function runInput() {
  consoleOut("Running input ...");
  setGlobalVariables();
  runCode("input", Number(day.value), Number(dayPart.value), exampleData.value, inputData.value);
}

function consoleOut(output) {
  d = new Date();
  time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  outVal = time + " " + output + "\n"
  console.log(outVal);
  $("#consoleOutput").append(outVal);
  
}

//code here needs to pass variables the RIGHT WAY

//execute script for the selected day
function runCode(mode, day, dayPart, exampleData, inputData) {
  consoleOut("Running code for day " + day + " ...");
  result = "";
  
  if (mode == "example") {
    data = exampleData;
  } else if (mode == "input") {
    data = inputData;
  } else {
    //invalid parameter
  }

  switch (day) {
    case 1:
      if (dayPart == "1") {
        result = day1_1(data);
      } else if (dayPart == "2") {
        result = day1_2(data);
      }
      break;
    default:
      break;
  }

      
  if (mode == "example") {
    //set value of the exampleResult input field to the result
    document.getElementById("exampleResult").value = result;
  } else if (mode == "input") {
    document.getElementById("inputResult").value = result;
  } else {
    //invalid parameter
  }
  
}

//scripts for dayzzzzz

//day 1 part 1
function day1_1(data) {
  consoleOut("Running the day 1 part 1 function ...");

  let calibValueTotal = 0;
  
  //traverse the input data line by line
  calibDoc = data.split('\n');

  //split the lines out and loop through them
  for (const calibLine of calibDoc) {
    consoleOut(calibLine); // Prints each fruit on a new line

    let firstDigit = "";
    let lastDigit = "";
    //loop through the characters in each line
    for (const value of calibLine) {
      if (!isNaN(value)) {

        if (firstDigit == "") {
          firstDigit = value;
        }
        
        lastDigit = value;
      }  
          
      //consoleOut(value);
    }

    consoleOut(firstDigit + lastDigit);
    calibValueTotal += Number(firstDigit + lastDigit);
    consoleOut(calibValueTotal);
  }
  
  return calibValueTotal;
}

//day 1 part 2
function day1_2(data) {
  consoleOut(arguments.callee.name + " Running the day 1 part 2 function ...");

  //traverse the input data line by line
  calibDoc = data.split('\n');
  
  //split the lines out and loop through them
  for (const calibLine of calibDoc) {
    //consoleOut(calibLine); // Prints each fruit on a new line

    
    
  }
  
  return day1_1(data); 
}
