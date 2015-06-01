// (function(){
	var social_window = function(e) {
		window.open(e, "social_window", "height=300,width=550,resizable=1")
	};

	function shareButton() {
		$(document).on("click", ".sharing-link", function(event) {
			event.preventDefault();
			var link = $(this).attr("href");
			return social_window(link);
		});
	}

// })();
