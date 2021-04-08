
$(document).ready(function(){

	//toggle menu
	$('.hamburger-container').click(function(){
		$('#menu').slideToggle();
	});

	//to fix issue that toggle adds style(hides) to nav
	$(window).resize(function(){
		if(window.innerWidth > 1024) {
			$('#menu').removeAttr('style');
		}
	});

	//icon animation
	var topBar = $('.hamburger li:nth-child(1)'),
		middleBar = $('.hamburger li:nth-child(2)'),
		bottomBar = $('.hamburger li:nth-child(3)');

	$('.hamburger-container').on('click', function() {
		if (middleBar.hasClass('rot-45deg')) {
			topBar.removeClass('rot45deg');
			middleBar.removeClass('rot-45deg');
			bottomBar.removeClass('hidden');
		} else {
			bottomBar.addClass('hidden');
			topBar.addClass('rot45deg');
			middleBar.addClass('rot-45deg');
		}
	});

});


 ///////////////////////// texto portada///////////////////////////
 var textWrapper = document.querySelector('.ml12');
 textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

 anime.timeline({ loop: true })
	 .add({
		 targets: '.ml12 .letter',
		 translateX: [40, 0],
		 translateZ: 0,
		 opacity: [0, 1],
		 easing: "easeOutExpo",
		 duration: 1200,
		 delay: (el, i) => 500 + 30 * i
	 }).add({
		 targets: '.ml12 .letter',
		 translateX: [0, -30],
		 opacity: [1, 0],
		 easing: "easeInExpo",
		 duration: 1100,
		 delay: (el, i) => 100 + 30 * i
	 });  


