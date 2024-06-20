
(function ($) {
    "use strict";

    $('#pasaporte').on("change", function() {
        console.log(this.value);
        if(this.value == 'si') {
            $("#vigPasaporteLabel").removeClass("disabledLabel");
            $('#vigPasaporte').attr("required","required");
            $('#vigPasaporte').prop('disabled', false);

            $("#numPasaporteLabel").removeClass("disabledLabel");
            $('#numPasaporte').attr("required","required");
            $('#numPasaporte').prop('disabled', false);
        }

        if(this.value == 'no') {
            $("#vigPasaporteLabel").addClass("disabledLabel");
            $('#vigPasaporte').removeAttr('required');
            $('#vigPasaporte').prop('disabled', true);

            $("#numPasaporteLabel").addClass("disabledLabel");
            $('#numPasaporte').removeAttr('required');
            $('#numPasaporte').prop('disabled', true);
        }
    });

    $("#segDoc").on("change", function() {
        if(this.value == 'no') {
            $("#numSegDocLabel").addClass("disabledLabel");
            $('#numSegDoc').removeAttr('required');
            $('#numSegDoc').prop('disabled', true);
        } else {
            $("#numSegDocLabel").removeClass("disabledLabel");
            $('#numSegDoc').attr("required","required");
            $('#numSegDoc').prop('disabled', false);
        }
    });

    $("#terDoc").on("change", function() {
        if(this.value == 'no') {
            $("#numTerDocLabel").addClass("disabledLabel");
            $('#numTerDoc').removeAttr('required');
            $('#numTerDoc').prop('disabled', true);
        } else {
            $("#numTerDocLabel").removeClass("disabledLabel");
            $('#numTerDoc').attr("required","required");
            $('#numTerDoc').prop('disabled', false);
        }
    });

    $('#formCaracterizacion').on('submit', function(event){
        var yearNac = $('#fecNac').val().split('-');
        var yearNow = new Date().getFullYear();
        var edadCalculada = yearNow - yearNac[0];

        localStorage.setItem("NumDoc", $('#numDoc').val());

        $.ajax({
            type: "GET",
            url: "/registrocaracterizacion",
            headers: {
                'Content-type':'application/json', 
                'Accept':'application/json'
            },
            dataType: 'json',
            data: {
                "num_doc": $('#numDoc').val(),
                "tipo_documento": $('#tipoDoc').val(),
                "vig_doc": $('#vigDoc').val(),
                "nombres": $('#name').val(),
                "apellidos": $('#lastName').val(),
                "fecha_nac": $('#fecNac').val(),
                "sexo": $('#sexo').val(),
                "edad": edadCalculada,
                "pasaporte": $('#pasaporte').val(),
                "vig_pasaporte": $('#vigPasaporte').val(),
                "num_pas": $('#numPasaporte').val(),
                "seg_doc": $('#segDoc').val(),
                "numseg_doc": $('#numSegDoc').val(),
                "ter_doc": $('#terDoc').val(),
                "numter_doc": $('#numTerDoc').val()
            },
            success: function(response) {
                if(response["mensaje"] == 'failed') {
                    $(".u-form-send-message").show();
                    $(".u-form-send-success").hide();
                    $("#nextInfoPersonal").hide();
                } else {
                    console.log(response);
                    $(".u-form-send-success").show();
                    $("#nextInfoPersonal").show();
                    $("#btnRegistrar").hide();
                    $(".u-form-send-message").hide();
                }
            },
            error: function(response) {
                console.log(response);
                $(".u-form-send-message").show();
                $(".u-form-send-success").hide();
                $("#nextInfoPersonal").hide();
            }
        });
    });
})(jQuery);