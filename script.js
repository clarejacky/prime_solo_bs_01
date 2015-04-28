var apikey = '91df4711deb6a6fa8e7c694207940394218396cd'; // Put your API key here


// Use this function to do stuff with your results. 
// It is called after 'search' is executed.
function searchCallback(results) {
    console.log(results);
     for(var i=0; i < 9; i++) {
    	$(".mainContent").append("<div id='" + results[i].id + "'class='col-md-4 well second'><p class='lead'>"+results[i].name+"</p><div class='hidden-sm hidden-xs'><img id='icon' src='"+results[i].image.icon_url+"'/></div><div>Description: "+results[i].deck+"</div><button class='btn-sm btn-success remove'></button></div>");

    	$(".mainContent").on("click", "button", function(){
    		$(this).parent().remove();
    	});
    	// $(".mainContent").on("click", "#"+results[i].id, function(){
    	// $(this).children().hide();
    	// $(this).siblings().children("#game").hide();
    	// $(this).children().slideDown();

    	// });
    	}
}

$(document).ready(function() {

	// Start the search here!
	search("batman");

	
});

// HELPER FUNCTION
// Executes a search using 'query' and runs searchCallback on the results of a success.
function search(query){

	$.ajax ({
	    type: 'GET',
	    dataType: 'jsonp',
	    crossDomain: true,
	    jsonp: 'json_callback',
	    url: 'http://www.giantbomb.com/api/search/?format=jsonp&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
	    complete: function() {
	        console.log('ajax complete');
	    },
	    success: function(data) {
	        searchCallback(data.results);
	    }
	});

}
