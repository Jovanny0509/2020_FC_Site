function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
}
        
$(document).ready(function(){
    $("#enviar").click(function(){
        alert('clicked');
        var nombre,tel,mail,mensaje,vacio;
        nombre = $("#nombre").val();
        tel = $("#telefono").val();
        mail = $("#mail").val();
        mensaje = $("#comentario").val();
        if( (nombre.length==0) || (tel.length==0) || (mail.length==0) || (mensaje.length==0) || (isValidEmailAddress( mail ) == false) ){
            vacio = 1;
        }else{
            vacio = 0;
        }
        if(vacio == 0){
            $.ajax({
                type: "POST",
                url: "enviar.php",
                cache: false,
                data: { nombre: nombre,mail: mail,telefono: tel,comentario: mensaje }
            }).done(function( html ) {
                $("#error_ajax").css('display','none');
                $("#resultado").html(html);
                $("#formulario").animate({'opacity': '0'}, 
                    1000,
                    function(){
                        $(this).hide();
                        $("#resultado").show();
                        $("#resultado").animate({'opacity': '100'}, 
                            10000

                        );
                    }

                );
            }).fail(function(jqXHR, textStatus) {
                //alert(textStatus);
                $("#error_ajax").html('<p>Error al enviar el formulario.</p>');
                $("#error_ajax").css('display','block');
                
                //alert( "Falla en el sistema. Contacte a su administrador.");
            });
        }else{
            if(isValidEmailAddress( mail ) == false){
                alert('El email es incorrecto.');
            }else{
                alert('Todos los campos deben llenarse.');
            }
            
        }
    
        
    });
});