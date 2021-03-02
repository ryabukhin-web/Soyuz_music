jQuery(function(){
    jQuery("a").click(function () {
      var elementClick = jQuery(this).attr("href").split('#')[1];
      var destination = jQuery(elementClick).offset().top;
      jQuery('html, body').animate({ scrollTop: destination }, 600);
      return false;
    });
});

jQuery('.top-slider__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

jQuery('.clips__slider').slick({
    centerMode: true,
    variableWidth: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<div class="clips__arrow"><button class="arrow arrow_prev slick-prev icon-arrow-prev slick-arrow" aria-label="Previous"></button></div>',
    nextArrow: '<div class="clips__arrow"><button class="arrow arrow_next slick-next icon-arrow-next slick-arrow" aria-label="Previous"></button></div>'
});

jQuery('.popular-artists__slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500
});

/*

const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

$('.player-example button').click(function () {
	var parent = $(this).parent();
	
	var button = $(this);
	var audio = $('audio', parent)[0];
	var duration = $('.player-example-duration', parent);
	
	if (audio.paused == false) {
		audio.pause();
		button.css('background', 'url(/images/play.png)');
	} else {
		audio.play();
		button.css('background', 'url(/images/pause.png)');
	}

	$(audio).on('ended', function() {
		button.css('background', 'url(/images/play.png)');
	});
	
	$(audio).on('timeupdate', function() {
		var date = new Date(audio.currentTime * 1000);
		duration.html(date.getMinutes()+':'+date.getSeconds());
	});
});

*/