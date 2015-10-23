// NOTE: I now have a separate branch called "ChipInformation" where I should place the Chip Number Information before moving it to the "master" branch.
console.log("Welcome to ChpFldr!");
console.log("This is YOUR MegaMan Battle Network Chip Folder and guide!");
console.log("By @JwBZx");
// I hope that you like this Project!
var editYN = false;
var viewYN = false;
var infoYN = false;
var aboutYN = false;
// NetNavi Selection:

// Introduction:
console.log("Hello! My name is MegaMan, and I am your Personal NetNavi!");
console.log("What do you want to do? You can:");
console.log("EDIT your Chip Folder [Type 'EDIT']");
console.log("VIEW your Chip Folder [Type 'VIEW']");
console.log("(get) INFO on your Battlechips");
console.log("(find out) ABOUT the people who made this ChpFldr Program!");
// The Starting Block (Prompts):
prompt("So what do you want to do? [Type one of the four choices ABOVE]");
if(prompt = "edit".toUppercase) {
	var editYN = true;
} else if(prompt = "view".toUppercase) {
	var viewYN = true;
} else if(prompt = "info".toUppercase) {
	var infoYN = true;
} else if(prompt = "about".toUppercase) {
	var aboutYN = true;
} else {
	console.log("Oops! It didn't work...Try typing in either 'EDIT', 'VIEW', 'INFO', or 'ABOUT'!");
}
// Edit Your Folder
if(var editYN = true) {
	console.log("Okay! Let's edit your Chip Folder!");
	console.log("What do you want to do? You can:");
	console.log("EDIT your Chip Folder by typing in the Chip Number [Type 'EDIT']");
	console.log("VIEW all of the MegaMan Battle Network NT Warrior Chips ever made, and also view their Chip Numbers [Type 'VIEW']");
	prompt("So what do you want to do? [Type on of the two choices above]?");
	if(prompt = "edit".toUppercase) {
		console.log("Okay sweet! Let's edit your Chip Folder!");
// Add code that will allow you to edit your Chip Folder by storing Chip Numbers in an Array
	}
} else if(prompt = "view".toUppercase) {
	console.log("Okay sweet! Get ready, because here is a list of every single MMBN NT Warrior Chips ever made!
	console.log("MegaMan Battle Network NT Warrior Battle Chip List:");
	console.log("#1:");
	console.log("#2:");
	console.log("#3:");
	console.log("#4:");
	console.log("#5:");
// Finish the list (there are 300 Chips, which is a lot!)
} else {
	console.log("Oops! It didn't work...Try typing in either 'EDIT' or 'VIEW'!");
}
// View Your Folder

// Get Information About Stuff

// Find Out About Us!

// The Finish Line (End):
