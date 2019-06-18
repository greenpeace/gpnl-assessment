$('document').ready(function(){

	$('.stem-button').click(function(e){

	    e.preventDefault();
	    // hide all span
			console.log(this);
	    var $el = $(this).parents('.stemkaart').find('.input-fields');
			console.log($el);

	    // $(".input-fields").not($el).hide();
	    $(".input-fields").not($el).removeClass('open');

	    // here is what I want to do
	    $el.toggleClass('open');
	});

//Swipeable divs





	//Parallax images

	var $el = $('.parallax-background-1');
$(window).on('scroll', function () {
		var scroll = $(document).scrollTop();
		$el.css({
				'background-position':'50% '+(-.4*scroll)+'px'
		});
});

var $el2 = $('.parallax-background-2');
$(window).on('scroll', function () {
	var scroll = $(document).scrollTop();
	$el2.css({
			'background-position':'50% '+(-.4*scroll)+'px'
	});
});

var myForm = document.getElementById('input-fields');
myForm.onsubmit = function() {
    var w = window.open('about:blank','Popup_Window','toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=400,height=300,left = 312,top = 234');
    this.target = 'Popup_Window';
};

});
