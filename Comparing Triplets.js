//=================
// Here we are trying to compare
// three numbers in an array
// Parameters:
// Alic and Bob are playing a game
//===================
var Alice = new Array();
var Bob = new Array();
var score;
var scoreBoard = new Array();

Alice = new Array (17, 28, 30);

Bob = new Array (99, 16, 8);

//================
// if
//=================
if (Alice[0] < Bob [0]) {
    bobScore = score++;
    aliceScore = score;
} else if (Alice [1] > Bob [1] && Alice[2] > Bob[2]) {
    aliceScore = score++;
};

scoreBoard = new Array (aliceScore, bobScore);