
(function ($) {
    "use strict";

    $('#cuartoDoc').on("change", function() {
        if(this.value == 'no') {
            $("#numCuartoDocLabel").addClass("disabledLabel");
            $('#numCuartoDoc').removeAttr('required');
            $('#numCuartoDoc').prop('disabled', true);
        } else {
            $("#numCuartoDocLabel").removeClass("disabledLabel");
            $('#numCuartoDoc').attr("required","required");
            $('#numCuartoDoc').prop('disabled', false);
        }
    });

    $("#instruccion").on("change", function() {
        if(this.value == 'no') {
            $("#areaLabel").addClass("disabledLabel");
            $('#area').removeAttr('required');
            $('#area').prop('disabled', true);
        } else {
            $("#areaLabel").removeClass("disabledLabel");
            $('#area').attr("required","required");
            $('#area').prop('disabled', false);
        }
    });

    $('#cargaFam').on("input", function() {
        localStorage.removeItem("cargaFamiliar");
        if(this.value == '0') {
            localStorage.setItem("cargaFamiliar", false);
        } else {
            localStorage.setItem("cargaFamiliar", true);
        }
    });

    $('#formDatosPersonales').on('submit', function(event){
        localStorage.setItem("cantCargaFam",  $('#cargaFam').val());

        $.ajax({
            type: "GET",
            url: "/registrodatospersonales",
            headers: {
                'Content-type':'application/json', 
                'Accept':'application/json'
            },
            dataType: 'json',
            data: {
                "num_doc": localStorage.getItem("NumDoc"),
                "dir_res": $('#dirRes').val(),
                "barrio": $('#barrio').val(),
                "localidad": $('#localidad').val(),
                "trabajo": $('#trabajo').val(),
                "correo": $('#email').val(),
                "num_1": $('#telPrin').val().toString(),
                "num_2": $('#telSec').val().toString(),
                "cuar_doc": $('#cuartoDoc').val(),
                "num_cuardoc": $('#numCuartoDoc').val(),
                "instruccion": $('#instruccion').val(),
                "area": $('#area').val(),
                "est_mig": $('#estadoMig').val(),
                "resp": $('#cargaFam').val(),
            },
            success: function(response) {
                if(response["mensaje"] == 'failed') {
                    $(".u-form-send-message").show();
                    $(".u-form-send-success").hide();
                    $("#nextInfoMedica").hide();
                } else {
                    console.log(response);
                    $(".u-form-send-success").show();
                    $("#nextInfoMedica").show();
                    $("#btnRegistrar").hide();
                    $(".u-form-send-message").hide();
                }

                return false;
            },
            error: function(response) {
                console.log(response);
                $(".u-form-send-message").show();
                $(".u-form-send-success").hide();
                $("#nextInfoMedica").hide();
            }
        });
    });
})(jQuery);