
(function ($) {
    "use strict";

    $("#discapacidad").on("change", function() {
        if(this.value == 'si') {
            $("#descDiscapacidadLabel").removeClass("disabledLabel");
            $('#descDiscapacidad').attr("required","required");
            $('#descDiscapacidad').prop('disabled', false);
            $("#descDiscapacidad").removeClass("disabledValue");
            $('#descDiscapacidad').val('');
        }

        if(this.value == 'no') {
            $("#descDiscapacidadLabel").addClass("disabledLabel");
            $('#descDiscapacidad').removeAttr('required');
            $('#descDiscapacidad').prop('disabled', true);
            $("#descDiscapacidad").addClass("disabledValue");
            $('#descDiscapacidad').val('N/A');
        }
    });

    $("#condicion").on("change", function() {
        if(this.value == 'si') {
            $("#descCondicionLabel").removeClass("disabledLabel");
            $('#descCondicion').attr("required","required");
            $('#descCondicion').prop('disabled', false);
            $("#descCondicion").removeClass("disabledValue");
            $('#descCondicion').val('');
        }

        if(this.value == 'no') {
            $("#descCondicionLabel").addClass("disabledLabel");
            $('#descCondicion').removeAttr('required');
            $('#descCondicion').prop('disabled', true);
            $("#descCondicion").addClass("disabledValue");
            $('#descCondicion').val('N/A');
        }
    });

    $('#formInfoMedica').on('submit', function(event){
        $.ajax({
            type: "GET",
            url: "/registroinfomedica",
            headers: {
                'Content-type':'application/json', 
                'Accept':'application/json'
            },
            dataType: 'json',
            data: {
                "num_doc": localStorage.getItem("NumDoc"),
                "discapacidad": $('#discapacidad').val(),
                "desc_disc": $('#descDiscapacidad').val(),
                "cond_med": $('#condicion').val(),
                "des_cond_med": $('#descCondicion').val()
            },
            success: function(response) {
                if(response["mensaje"] == 'failed') {
                    $(".u-form-send-message").show();
                    $(".u-form-send-success").hide();
                    $("#nextInfoFamiliares").hide();
                    $("#finalizar").hide();
                } else {
                    $(".u-form-send-success").show();
                    if(localStorage.getItem("cargaFamiliar") == 'true') {
                        $("#nextInfoFamiliares").show();
                    } else {
                        $("#finalizar").show();
                    }
                    $("#btnRegistrar").hide();
                    $(".u-form-send-message").hide();
                }

                return false;
            },
            error: function(response) {
                console.log("error: ", response);
                $(".u-form-send-message").show();
                $(".u-form-send-success").hide();
                $("#nextInfoFamiliares").hide();
                $("#finalizar").hide();
            }
        });
    });
})(jQuery);