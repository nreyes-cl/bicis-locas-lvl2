function validateForm(){
	/* primero obtengo el valor de los campos
	del formulario */
	const name = $('#name').val().trim();
	
	/* Ahora pruebo 1 a 1 los valores */
	if (name == '') {
		$('#name').parent().append('<span>El nombre no puede ser vacío</span>');
	}
}