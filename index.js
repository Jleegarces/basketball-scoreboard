// grab the home score and guest score elements

let homeScoreEl = document.getElementById('homeScore')
let guestScoreEl = document.getElementById('guestScore')

// set scores to 0

let homeScore = 0;
let guestScore = 0;

// create functions to add points to the scores

function add1 () {
    homeScore += 1;
    homeScoreEl.innerText = homeScore
}
function add2 () {
    homeScore += 2;
    homeScoreEl.innerText = homeScore
}
function add3 () {
    homeScore += 3;
    homeScoreEl.innerText = homeScore
}
function AwayAdd1 () {
    guestScore += 1;
    guestScoreEl.innerText = guestScore
}
function AwayAdd2 () {
    guestScore += 2;
    guestScoreEl.innerText = guestScore
}
function AwayAdd3 () {
    guestScore += 3;
    guestScoreEl.innerText = guestScore
}

//  create a function that resets the score

function reset () {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.innerText = 0;
    guestScoreEl.innerText = 0;
}


