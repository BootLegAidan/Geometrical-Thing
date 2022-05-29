var bodyEl = document.getElementsByTagName('body')[0];
var labels = document.getElementsByTagName('label')
var c = document.getElementsByTagName("canvas")[0];
var reset = document.getElementById("resetBtn");
var points = document.getElementById("pointNum");
var pauseToggleEl = document.getElementById("pauseToggle");
var colorToggleEl = document.getElementById("colorToggle");
var nightModeToggleEl = document.getElementById('nightModeToggle')
var morphToggleEl = document.getElementById('morphToggle')
var shapeToggleEl = document.getElementById('shapeToggle')
var directionToggleEl = document.getElementById('incrementDirectionToggle')
let root = document.documentElement;

reset.onclick = function () {
	num = 2;
	fakeNum = num * 100
	cosMult = 1
	sinMult = 1
};

var ctx = c.getContext("2d");

var num = 2;
var fakeNum = num * 100
var pause = 0;

var cosMult = 1.0
var sinMult = 1.0

var size;

if (window.innerHeight > window.innerWidth) {
	size = window.innerWidth;
} else {
	size = window.innerHeight;
}

var mult = size * 0.5;

c.width = size;
c.height = size;

update();
