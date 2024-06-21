



function readMore() {

	var btnText = document.getElementById("btn__text");
	var hiddenContent = document.getElementById("hidden__content");


	hiddenContent.classList.toggle('_show');

	if (btnText.innerHTML === 'click here') {
		btnText.innerHTML = 'thanks!';
	} else {
		btnText.innerHTML = 'click here';
	}

}





/*
if (toggleBtn) {

	tB.addEventListener( function readMore () {
		hC.classList.toggle('show__content');
	});

}
*/



