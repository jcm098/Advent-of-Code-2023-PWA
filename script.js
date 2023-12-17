setGlobalVariables();

//read and set global variables
 function setGlobalVariables() {
   consoleOut("Global Variables set ...");
   var day = document.getElementById("day").value;
   var exampleData = document.getElementById("exampleData").value;
   var inputData = document.getElementById("inputData").value;
 }

//load data for the specified day
function loadData() {
  consoleOut("loading data...");
  $("#exampleData").load("input/day1-example.txt");
  $("#inputData").load("input/day1-input.txt");
}

//execute example
function runExample() {
  consoleOut("Running example ...");
  setGlobalVariables();
  runCode("example", Number(day.value), exampleData.value, inputData.value);
}

//execute input
function runInput() {
  consoleOut("Running input ...");
  setGlobalVariables();
  runCode("input", Number(day.value), exampleData.value, inputData.value);
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
function runCode(mode, day, exampleData, inputData) {
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
      result = day1(data);
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

//day 1
function day1(data) {
  consoleOut("Running the day 1 function ...");
  return "day 1 result";
}

