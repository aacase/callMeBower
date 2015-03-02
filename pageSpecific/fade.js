$(document).ready(function(){
  $('.parallax-window').parallax({imageSrc: '../img/callme/set2-01.jpg'});
  $('.parallax-window2').parallax({imageSrc: '../img/callme/set2-02.jpg'});
  $('.parallax-window3').parallax({imageSrc: '../img/callme/set2-03.jpg'});
   $('.firstFade').hide();
   $('.fourth').hide();
   $('.first').fadeIn(1500, function(){
   	$('.second').fadeIn(1500, function(){
   		$('.third').fadeIn(1500, function(){
   			$('.fourth').fadeIn(1500)
   		});
   	});
   });
});


(function($) {
    var $window = $(window),
        $html = $('section');
        $mobileButton= $('.enhanceSection')

    function resize() {
        if ($window.width() < 1200) {
            return $html.addClass('text-center');
            return $mobileButton.addClass('mobileButton');
        }

        $html.removeClass('text-center');
        $mobileButton.addClass('mobileButton');
    }

    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);

(function($) {
    var $window = $(window),
        $mobileButton= $('#mobileButton');

    function resize() {
        if ($window.width() < 1200) {
            return $mobileButton.addClass('mobileButton');
        }
        $mobileButton.addClass('mobileButton');
    }

    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);

