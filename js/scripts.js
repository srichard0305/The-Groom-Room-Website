/*

	The Groom Room
	Author: Steven Richard
	Date:   Dec 09, 2023
	Filename: script.js
	JavaScript file for general functions used across the website
*/



function changeNameInput(){
		document.getElementById("name").style.backgroundColor = "white";
}

function changeEmailInput(){
	document.getElementById("email").style.backgroundColor = "white";
}

function changeCommentInput(){
	document.getElementById("comment").style.backgroundColor = "white";
}

/* Validates the form entries and adds a red background to the inputs if invalid */
function validateForm(){
	
	document.getElementById("name").style.backgroundColor = "white";
	document.getElementById("email").style.backgroundColor = "white";
	document.getElementById("comment").style.backgroundColor = "white";
	
	let x = document.forms["form"]["name"].value;
	if (x == "") {
		document.getElementById("name").style.backgroundColor = "#fa7070";
		alert("Name is a Required Field");
	
	}
  
  let y = document.forms["form"]["email"].value;
	if (y == "") {
		document.getElementById("email").style.backgroundColor = "#fa7070";
		alert("Email is s Required Field");
  }
  
  let z = document.forms["form"]["comment"].value;
	if (z == "") {
		document.getElementById("comment").style.backgroundColor = "#fa7070";
		alert("Comment is a Required Field");
  }
}

