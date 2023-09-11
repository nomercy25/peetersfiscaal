let menuBtn = document.querySelector('.burger-menu');
let menu = document.querySelector('.drop-menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('close');
	menu.classList.toggle('close');
});
