//PRELOAD VARS
var name = "Unknown";
var hp = 100;
var maxhp = 100;
// END OF INIT
function speak() {
	name = prompt("What is your name?",name);
	document.getElementById('nametag').innerHTML = name;
};
function runscript() {
	runsc = document.getElementById('JStest').value;
	eval(runsc);
};