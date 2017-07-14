 $(document).ready(function(){
 
 $('#loginForm').bootstrapValidator({
 
	 message: 'Este valor no es valido',
 
	 feedbackIcons: {
 
		 valid: 'glyphicon glyphicon-ok',
 
		 invalid: 'glyphicon glyphicon-remove',
 
		 validating: 'glyphicon glyphicon-refresh'
 
	 },
 
	 fields: {
 
		 Usuario: {
 
			 validators: {
 
				 notEmpty: {
 
					 message: 'El nombre de usuario es requerido'
 
				 },
                 stringLength: {
                        min: 4,
                        max: 20,
                        message:'Por favor. Ingrese entre 4 y 20 caracteres'
                 }/*,
                     emailAddress: {
 
					 message: 'El correo electronico no es valido'
 
				 }*/
 
			 }
 
		 },
 
		 pass: {
 
			 validators: {
 
				 notEmpty: {
 
					 message: 'La contraseña es requerida'
 
				 }
 
			 }
 
		 }
 
	 }
 
    });



});