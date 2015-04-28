var apikey = '91df4711deb6a6fa8e7c694207940394218396cd'; // Put your API key here

var count = 0;
// Use this function to do stuff with your results. 
// It is called after 'search' is executed.
function searchCallback(results) {
    console.log(results);
     for(var i=0; i < 9; i++) {
     	var el = "<div id='" + results[i].id + "'class='col-md-4 well second'><p class='lead'>"+results[i].name+"</p><div class='hidden-sm hidden-xs'><img id='icon' src='"+results[i].image.icon_url+"'/></div><div>Description: "+results[i].deck+"</div><button class='btn-sm btn-success remove'>Remove Title</button></div>"
    	$(el).hide().appendTo(".mainContent").fadeIn("slow");
    	}

    	$(".mainContent").on("click", "button", function(){
    		$(this).parent().fadeOut();
    		count++;
    		for(var i=(8+ count); i < (9+count); i++) {
     			var el = "<div id='" + results[i].id + "'class='col-md-4 well second'><p class='lead'>"+results[i].name+"</p><div class='hidden-sm hidden-xs'><img id='icon' src='"+results[i].image.icon_url+"'/></div><div>Description: "+results[i].deck+"</div><button class='btn-sm btn-success remove'>Remove Title</button></div>"
    			$(el).hide().appendTo(".mainContent").fadeIn("slow");
    	}

    	});
    	
    	
}

$(document).ready(function() {

	// Start the search here!
	// search("batman");
var value; 

	$(".searchBtn").on("click", function (e) {
		$(".mainContent").empty();
		value = $("#searchField").val();

		search(value);
		e.preventDefault();
	});
	
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
