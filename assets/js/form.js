var button = document.getElementById('submit');

var form = document.getElementById('form');

var formModal = document.querySelector('.modal_all');

var closeModal = document.querySelector('.modal-close-form');

button.addEventListener('click', sendMail);

function sendMail() {
	var params = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		subject: document.getElementById('subject').value,
		message: document.getElementById('message').value,
	};
	emailjs.send('service_rn6whef', 'template_8zth106', params).then(function (res) {
		formModal.classList.add('active-modal');
		form.reset();
	});
	// console.log(params);
}

closeModal.addEventListener('click', closeFormModal);

function closeFormModal() {
	formModal.classList.remove('active-modal');
}

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		formModal.classList.remove('active-modal');
	}
});

document.addEventListener('click', function (event) {
	if (event.target.matches('.modal_all')) {
		formModal.classList.remove('active-modal');
	}
});
