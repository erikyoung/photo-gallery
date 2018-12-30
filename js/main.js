/*  1)  The search box at the top of the page 
should filters photos based on the captions.
 2) The photos should filter in real-time as you type, 
and only display photos that match the search. */ 

//1) loop through all the images
//2) should be able to console log the images
//3) be able to take the value of the search input
//4) with the value of the search input, I want to check
// if the value of the data-alt is put in, display that particular item
// if not display nothing
$(document).ready(function() {
    //get ahold of the a tags
    let images = document.getElementsByTagName('a');
    //get input value
    $("#myInput").on('keyup', function() {
    	let search = $('#myInput').val().toLowerCase();

    	for (var i = 0; i < images.length; i++) {
    		let searchVal = images[i].getAttribute('data-alt');
    		if (searchVal.toLowerCase().indexOf(search) > -1) {
    			images[i].style.display = "";
    		} else {
    			images[i].style.display = "none"; 
    		}
    	} 
    });
    

});


