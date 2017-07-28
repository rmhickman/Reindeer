var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("reindeer");

var currentReindeer = "";
var loopCount = 8;

for (var i = 0; i < loopCount; i++){
	var reindeerDomString = "";
	var currentReindeer = reindeer[i];
    var colorDomString = "";
    var currentColor = colors[i];

	reindeerDomString += currentReindeer;
    hohohoElement.innerHTML += reindeerDomString;

    colorDomString += currentColor;
    hohohoElement.innerHTML += colorDomString;
}


