

  //create instance of task8.ejs (input value is changed to test  imported elements )
document.body.innerHTML=`<title>Task 10</title>
</head>
<body>
<div class="jumbotron bg-white">
<h1 class="display-1">Task 10</h1><br>
<p class="lead"> Implement and test a program to simulate a simple game.<br><br> Your program should do the following:<br><br>
    Store six colours in an external file (Note: these colours can be your choice of words or graphics).<br> Create three arrays and input the colours to each of the arrays.<br> For each of the three arrays, create a random number between 1 and 6 and output that colour to the screen. If two of the colours match, the user wins 50 pence. <br> If all three colours match, the user wins &pound;1.<br> Allow the user to have five &lsquo;shots&rsquo; and keep track of their winnings.<br> Display suitable messages on screen.
    </p> <br><p> File handling : write, save and close on file:app.js</p></div>
    <br><br>
    <div class="jumbotron bg-white text-center bg">
        <p class="lead text-danger">Game rules:</p>
        <p class="lead text-primary">Match 3 colors and you<span class='text-danger'> WIN</span> £ 1</p>
        <p class="lead text-primary">Match 2 colors and you <span class='text-danger'>WIN</span> £ 0.50</p>
        <p class="lead text-primary">Match no colors and you <span class='text-danger'>LOOSE </span> £ 0.50</p>
        <button type="button" id="cashOut"  class="btn btn-warning btn-lg"> Cash Out </button> <br><br>
     <p class="lead text-warning warn">IF YOU LOOSE, AND YOUR GAME BALANCE IS LESS THAN 0, £ 0.50 IS <span class="text-danger">AUTOMATICALLY WITHDRAWN </span>FROM YOUR GAME WALLET</p>

      <div id="result"></div>

        <br><br>
        <div class="row">
            <div class="col-4">
                <div class="square square1"></div>
            </div>
            <div class="col-4"><div class="square square2"></div>

            </div>
                <div class="col-4"><div class="square square3"></div>

                </div>

        </div>


<br><br><br>
  
        <button type="button" id="start"  class="btn btn-success btn-lg"> Play </button> &nbsp;&nbsp;&nbsp;


        <button type="button" id="tryAgain"  class="btn btn-primary btn-lg"> Play Again </button>
<br>
      

    </div>`;  
    const {colors, play, reTry,withdraw, playGame,maxRounds, wallet,wins,
 round , button, tryAgain,cashOut,resetPage }= require('../task10')


// //INTEGRATION TEST OF COMPONENTS
describe('TEST TASK 10.JS FUNCTIONS *CASE: USER ADDS £-1 CREDIT AND 2 COLORS MATCH)', () => {
 const { location } = window;



  // configure jsdom,  explicitly imported it in  test file,
const path = require("path");
const { JSDOM } = require("jsdom");
const fs = require("fs");
// built-in fs Node module to read the HTML file and store it in a variable:
const html = fs.readFileSync(
  path.resolve(__dirname, "../views/task10.ejs"),
  "utf8"
);
//init variable result for testing;
let result;
 
beforeEach(() => {    
  //PROMPT RETURNS VALUE OF :
        spyOn(window, "prompt").and.returnValue(-1);
        //VALUE IS CONFIRMED
        spyOn(window, "confirm");
    delete window.location;
    window.location = { reload: jest.fn() };
    });
  

  
  afterEach(() => {
    window.location = location;
  });


it('tests playGame function round 1', () => {
  jest.spyOn(window.location, 'reload');
  //MOCK ALERT

 
const alert= jest.spyOn(window, 'alert').mockImplementation(() => {});
//RUN FUNCTION:
  window.location.reload();

    expect(window.location.reload).toHaveBeenCalled();

  expect(jest.isMockFunction(window.location.reload)).toBe(true);
  //mocked function is called once
  

});

it('tests playGame function round 2', () => {
 
//RUN FUNCTION:
  window.location.reload();

    expect(window.location.reload).toHaveBeenCalled();
    
  expect(jest.isMockFunction(window.location.reload)).toBe(true);
  //mocked function is called once



});
it('tests playGame function round 3', () => {
  //MOCK ALERT
const alert= jest.spyOn(window, 'alert').mockImplementation(() => {});
//RUN FUNCTION:
playGame();

  //mocked function is called once
  result= document.getElementById('result');

  //GET INNER HTML OF ELEMENTS: CREDIT, SCORE AND ROUND
let credit= result.querySelector('#credit').innerHTML;
let score = result.querySelector('.score').innerHTML;
let roundN = result.querySelector('.round').innerHTML;

//roundN should be : 1 due to reload event
expect(roundN).toBe("1");


expect(roundN).toMatchSnapshot();
expect(credit).toMatchSnapshot();
expect(alert).toMatchSnapshot();
const square1= document.querySelector(".square1").innerHTML;
const square2= document.querySelector(".square2").innerHTML;
const square3= document.querySelector(".square3").innerHTML;

expect(square1).toBe('blue')
expect(square2).toBe('blue')
expect(square3).toBe('pink')


});



});