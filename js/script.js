

const toggleBtn = document.querySelector('.toggle__btn');
const hiddenContent = document.querySelector('.hidden__content');

if (toggleBtn) {

	toggleBtn.addEventListener("click", function (e) {
		hiddenContent.classList.toggle('._show__content');
	});

}




