function validateForm(){
	/* primero obtengo el valor de los campos
	del formulario */
	const name = $('#name').val().trim();
	const lastname = $('#lastname').val().trim();
	const email = $('#input-email').val().trim();
	const password = $('#input-password').val().trim();
	const select = $('#input-option-bike')[0].value;
	const pattern = new RegExp('^[A-Z\u00f1\u00d1]+$', 'i');
	const pattern2 = new RegExp('^[a-z0-9]+(.[-_a-z0-9]+)@[a-z0-9-]+(.[a-z0-9-]+)(.[a-z]{2,15})$', 'i');
	
	/* Ahora pruebo 1 a 1 los valores */
	if (name == '') {
		$('#name').parent().append('<span>El nombre no puede ser vacío</span>');
	}else{
		if (!pattern.test(name)) {
			$('#name').parent().append('<span>El nombre debe tener caracteres de [A-Z]</span>');
		}else{
			if (name[0]==name[0].toLowerCase()) {
				$('#name').parent().append('<span>El nombre debe empezar por una letra mayúscula</span>');
			}
		}
	}
	if (lastname == '') {
		$('#lastname').parent().append('<span>El apellido no puede ser vacío</span>');
	}else{
		if (!pattern.test(lastname)) {
			$('#lastname').parent().append('<span>El apellido debe tener caracteres de [A-Z]</span>');
		}else{
			if (lastname[0]==lastname[0].toLowerCase()) {
				$('#lastname').parent().append('<span>El apellido debe empezar por una letra mayúscula</span>');
			}
		}
	}
	if (email == '') {
		$('#input-email').parent().append('<span>El email no puede ser vacío</span>');
	}else{
		if (!pattern2.test(email)) {
			$('#input-email').parent().append('<span>El email debe tener el formato valido</span>');
		}
	}
	if (password == '') {
		$('#input-password').parent().append('<span>La contraseña no puede ser vacía</span>');
	}else{
		if (password == 'password' || password == '123456' || password == '098754') {
			$('#input-password').parent().append('<span>La contraseña no puede ser password o 123456 o 098754</span>');
		}else{
			if (password.length < 6) {
				$('#input-password').parent().append('<span>La contraseña debe tener más de 6 caracteres</span>');
			}
		}
	}
	if (select == 0) {
		$('#input-option-bike').parent().append('<span>El tipo de bicicleta no puede ser vacío</span>');
	}
}