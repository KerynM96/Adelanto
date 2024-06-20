
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('#formLogin').on('submit',function(event){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        if (check) { 
            event.preventDefault();
            sendRequest();
        }

        return check;
    });

    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
            hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).val().trim() == ''){
            return false;
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    function sendRequest() {
        $.ajax({
            type: "GET",
            url: "/auth",
            data: {
                username: $("#user").val(),
                password: $("#pass").val()
            },
            success: function(response) {
                $("#lblMensaje").text("");
                $("#mensaje").hide();

                if(response["mensaje"] == 'failed') {
                    $("#lblMensaje").text("Usuario o Contraseña incorrectos.");
                    $("#mensaje").show();
                } else {
                    $("#lblMensaje").text("");
                    $("#mensaje").hide();
                    $(location).prop('href', '/caracterizacion');
                }                
            },
            error: function(response) {
                console.log(response);
                $("#lblMensaje").text(response);
                $("#mensaje").show();
            }
        });
    }
})(jQuery);