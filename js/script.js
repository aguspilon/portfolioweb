
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

/////////start img efect///////////////////
const slide = document.getElementById('example');
const tooltip = document.getElementById('coordinates');
const toggle = document.getElementById('display-coordinates');

slide.addEventListener('mousemove', function(e) {
// Get dimensions of slide element
const r = this.getBoundingClientRect()

// Set x and y values prop values based on center of slide element
this.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
this.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
})

slide.addEventListener('mouseleave', function() {
// Reset x and y prop values when no longer hovering
this.style.setProperty('--x', 0)
this.style.setProperty('--y', 0) 
})


document.body.addEventListener('mousemove', function(e) {
// Have coordinate values follow the user's cursor
tooltip.style.left = e.pageX - 15 + 'px';
tooltip.style.top = e.pageY - 70 + 'px';
})

toggle.addEventListener('change', function(e) {
// Toggle the display of coordinate values
this.checked
? document.body.classList.add('display-coordinates')
: document.body.classList.remove('display-coordinates')           
	})
////////////////////end efect img///////////////

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


