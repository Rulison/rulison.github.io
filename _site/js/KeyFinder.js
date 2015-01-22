function getKey(text) {

	var noteCounts = {};
	noteCounts["a"] = 0;
	noteCounts["bb"] = 0;
	noteCounts["b"] = 0;
	noteCounts["c"] = 0;
	noteCounts["db"] = 0;
	noteCounts["d"] = 0;
	noteCounts["eb"] = 0;
	noteCounts["e"] = 0;
	noteCounts["f"] = 0;
	noteCounts["gb"] = 0;
	noteCounts["g"] = 0;
	noteCounts["ab"] = 0;

	for (index = 0; index < 12; index++) {
		noteCounts[index] = 0;
	}
	var wordsArray = text.split(" ");
	for (i = 0;i < wordsArray.length; i++) {
		var notesArray = getNotes(wordsArray[i]);
		for (j = 0;j < notesArray.length; j++) {
			noteCounts[notesArray[j]] += 1;
		}
	}
}

var NOTES = ["a", "bb", "b", "c", "db", "d", "eb", "e", "f", "gb", "g", "ab"]
var CHORD_MAP = {}
CHORD_MAP["A"] = ["a", "db", "e"];
CHORD_MAP["Bb"] = ["bb", "d", "f"];
CHORD_MAP["B"] = ["b", "eb", "gb"];
CHORD_MAP["C"] = ["c", "e", "g"];
CHORD_MAP["Db"] = ["db", "f", "ab"];
CHORD_MAP["D"] = ["d", "gb", "a"];
CHORD_MAP["Eb"] = ["eb", "g", "bb"];
CHORD_MAP["E"] = ["e", "ab", "b"];
CHORD_MAP["F"] = ["f", "a", "c"];
CHORD_MAP["Gb"] = ["gb", "bb", "db"];
CHORD_MAP["G"] = ["g", "b", "d"];
CHORD_MAP["Ab"] = ["ab", "c", "eb"];

function moveUp(note, halfSteps) {
	if (halfSteps < 0) {
		halfSteps = 12 + halfSteps;
	}
	var noteIndex = NOTES.indexOf(note);
	return NOTES[(noteIndex + halfSteps) % 12];
}

function getNotes(chord) {
	if (chord.length == 1) {
		return CHORD_MAP[chord]
	}

}


document.addEventListener('DOMContentLoaded', function () {
	var textArea = document.getElementsByClassName("KeyFinder");
	var text = textArea.value;
	var key = getKey(text);

}

