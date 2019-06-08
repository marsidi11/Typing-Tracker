/*							
* Poject Titile: Typing Tracker	
* Start Date: 08.06.2019 22:20   
* By: Marsid Zyberi			 								   	
*/

words = ["the","of","and", "to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"];

function shuffle(arr) {
	for (var i = arr.length - 1; i > 0; i--) {
		var m = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[m]] = [arr[m], arr[i]];
	}
}

shuffle(words)

function load() {
	document.getElementById("para").textContent = words[0] + " " + words[1]	+ " " + words[2] + " " + words[3] + " " + words[4] + " " + words[5] + " " + words[6] + " " + words[7] + " " + words[8] + " " + words[9] + " " + words[10]	
}

function space() {
	if (event.keyCode == 32) {
		var txt = document.getElementById("track").value = "";
	}
}