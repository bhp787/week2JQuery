/**
 * @author Charlie Calvert
 * 
 * Updated to show how to load multiple images
 * Load one image from constructor
 * Load second image on button click
 * Updated to show how to use for loop to fill list
 */

var MyObject = (function() {
    'use strict';
	
	var images = ["startImage.gif", "image01.jpeg", "image02.jpeg", "image03.jpeg"];
	var imgs = [];
	
	// Constructor 
    function MyObject() {
    	// Initializes images        
        for (var i = 0; i < images.length; i++) {
        	imgs[i] = new Image();
        	imgs[i].src = images[i];   
        };
        // Call private methods without using this.
        run();                	     	
    };	
	
	// Private method for loading images
	var setImage = function (imageIndex) {				
	   	$("#myImage").attr({
	   		src: imgs[imageIndex].src        	
	    }); 
	}; 
	
	// Private method to initialize application
    var run = function () {
       	$("#changeMe").html("What color would you like to see?");
       	setImage(0);
    };      

	// Public methods called from HTML files
    MyObject.prototype.runButton01 = function () {
    	$("#myHeading").html("This is what is behind door #1");
       	$("#changeMe").html("Now you see red.");
       	$("#changeMe2").html("A list of One.");
       	$(".caption").html("Don't blink. You might find yourself in an ocean of pain!");
       	$("body").css( { "background-color": "red", color: "blue" } );
       	$("#myList").empty();
       	for (var i = 1; i < 2; i++) {
       		$("#myList").append("<li>List Item " + i.toString() + "</li>");
       	}
       	setImage(1);       	
    };    
    
    MyObject.prototype.runButton02 = function () {
    	$("#myHeading").html("This is what is behind Door #2");
       	$("#changeMe").html("Now you see grey.");
       	$("#changeMe2").html("A list of Two.");
       	$(".caption").html("That is a very cheeky heart!");
       	$("body").css( { "background-color": "#C1CDCD", color: "#7FFFD4" } );
       	$("#myList").empty();
       	for (var i = 1; i < 3; i++) {
       		$("#myList").append("<li>List Item " + i.toString() + "</li>");
       	}
       	setImage(2);       	
    };    
    
    MyObject.prototype.runButton03 = function () {
    	$("#myHeading").html("This is what is behind Door #3");
       	$("#changeMe").html("Now you see purple..");
       	$("#changeMe2").html("A list of Three.");
       	$(".caption").html("A red-headed field with wings and things!");
       	$(".blue").css( { "backgroundColor": "lightpurple", color: "purple" } );
       	$("#myList").empty();
       	for (var i = 1; i < 4; i++) {
       		$("#myList").append("<li>List Item " + i.toString() + "</li>");
       	}
       	setImage(3);       	
    };    
    return MyObject;
})();



// This will be called when page is ready
$(document).ready(function() {	
	var myObject = new MyObject();	
	$("#myButton01").click(myObject.runButton01);	
	$("#myButton02").click(myObject.runButton02);
	$("#myButton03").click(myObject.runButton03);
});

