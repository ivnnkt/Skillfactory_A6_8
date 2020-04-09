function init() {
	
	let progress = 0

	$("button").click(function() {
	    let button_value = $(this).val();

	    if (progress <= 99) {
	    	progress = +progress + +button_value
	    }

	    else {
	    	progress = 0
	    }

	    $(".progress-bar").width(progress + "%")
		$(".progress-bar").text(progress + "%")

	});
  
}

$(document).ready(init);
