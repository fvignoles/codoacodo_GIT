function validarMail(formulario) {

    var usuarioForm = formulario.usuario.value;
    var tieneArroba = usuarioForm.indexOf('@');
    var claveForm = formulario.clave.value;
    var mensajeForm = ''

    if(usuarioForm == '') {
        mensajeForm += 'El usuario no puede estar vacío.\n'
    }
    else if (tieneArroba == -1) {
        mensajeForm +='El usuario debe tener una @. \n' 
    } 
    
    if (claveForm == "") {
        mensajeForm += 'La clave no puede estar vacía.\n'
    } 
    
    if (mensajeForm == "") { 
        mensajeForm = 'El formulario se envió correctamente' 
    }  
    alert(mensajeForm)

return
}
