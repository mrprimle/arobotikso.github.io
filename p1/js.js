function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector('.main-menu').classList.toggle("mm-change");
}
//=================================================================
var left = 0;

function sliderLeft(){
	var polosa = document.getElementById('polosa');
	left -= 25;
	if (left < -75) {
		left = 0;
	}
	polosa.style.left = left +'vw';
}

function sliderRight(){
	var polosa = document.getElementById('polosa');
	left += 25;
	if (left > 0) {
		left = -75;
	}
	polosa.style.left = left +'vw';
}