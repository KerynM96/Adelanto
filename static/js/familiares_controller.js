(function ($) {
    "use strict";

    $('#formInfoFamiliares').on('submit', function(event){
        var cantFamiliares = localStorage.getItem("cantCargaFam");

        for(var i = 1; i <= cantFamiliares; i++) {

            var yearNac = $('#fecNacFam'+i).val().split('-');
            var yearNow = new Date().getFullYear();
            var edadCalculada = yearNow - yearNac[0];

            $.ajax({
                type: "GET",
                url: "/registroInfoFamiliares",
                headers: {
                    'Content-type':'application/json', 
                    'Accept':'application/json'
                },
                dataType: 'json',
                data: {
                    'num_doc': localStorage.getItem("NumDoc"),
                    'num_doc_ref': $('#numDoc'+i).val(),
                    'tip_doc': $('#tipoDoc'+i).val(),
                    'vig_doc_id': $('#vigDoc'+i).val(),
                    'nom_ref': $('#nameFam'+i).val(),
                    'ape_ref': $('#lastNameFam'+i).val(),
                    'fec_nac': $('#fecNacFam'+i).val(),
                    'edad_ref': edadCalculada,
                    'sex_ref': $('#sexoFam'+i).val(),
                    'tel_ref1': $('#telPrinFam'+i).val(),
                    'tel_ref2': $('#telSecFam'+i).val(),
                    'parentesco': $('#parentezco'+i).val(),
                    'ocupacion': $('#ocupacion'+i).val(),
                    'seg_doc_ref': $('#segTipoDocFam'+i).val(),
                    'num_segdoc_ref': $('#segNumDocFam'+i).val(),
                    'ter_doc_ref': $('#terTipoDocFam'+i).val(),
                    'num_terdoc_ref': $('#terNumDocFam'+i).val(),
                    'observaciones': $('#observaciones'+i).val()
                },
                success: function(response) {
                    console.log(response);
                    if(response["mensaje"] == 'failed') {
                        $(".u-form-send-message").show();
                        $(".u-form-send-success").hide();
                        $("#finalizar").hide();
                    } else {
                        $(".u-form-send-success").show();
                        $("#finalizar").show();
                        $("#btnRegistrar").hide();
                        $(".u-form-send-message").hide();
                    }

                    return false;
                },
                error: function(response) {
                    console.log(response);
                    $(".u-form-send-message").show();
                    $(".u-form-send-success").hide();
                    $("#finalizar").hide();
                }
            });
        }
    });
})(jQuery);