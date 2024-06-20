
$(document).ready(function(){
    $('#formBusqueda').on('submit', function(event){
        $("#resultContainer").hide();
        $("#noResultContainer").hide();
        $('#loadingContainer').show();

        $.ajax({
            type: "GET",
            url: "/busquedapersonas",
            headers: {
                'Content-type':'application/json', 
                'Accept':'application/json'
            },
            dataType: 'json',
            data: {
                "num_doc": $('#numDoc').val(),
            },
            success: function(response) {
                console.log("success: ", response);
                setTimeout(
                    function() {
                        $("#familiares").hide();
                        $("#numDoc").val("");
                        iterateData(response);
                    }, 2000);
            },
            error: function(response) {
                console.log("error: ", response);
            }
        });
    });

    function iterateData(jsonArray) {
        if(jsonArray['data'] != null) {
            //Datos del beneficiario
            var fecha_nac = new Date(jsonArray['data'][5]);

            $('#num_Doc').text(jsonArray['data'][0]);
            $('#tipoDoc').text(jsonArray['data'][1]);
            $('#vigDoc').text(jsonArray['data'][2]);
            $('#name').text(jsonArray['data'][3]);
            $('#lastName').text(jsonArray['data'][4]);
            $('#fecNac').text(((fecha_nac.getDate() > 9) ? fecha_nac.getDate() : ('0' + fecha_nac.getDate())) + '/' + ((fecha_nac.getMonth() > 8) ? (fecha_nac.getMonth() + 1) : ('0' + (fecha_nac.getMonth() + 1))) + '/' + fecha_nac.getFullYear());
            $('#sexo').text(jsonArray['data'][6]);
            $('#edad').text(jsonArray['data'][7]);
            $('#pasaporte').text(jsonArray['data'][8]);
            $('#vigPasaporte').text(jsonArray['data'][9]);
            $('#numPasaporte').text(jsonArray['data'][10]);
            $('#segDoc').text(jsonArray['data'][11]);
            $('#numSegDoc').text(jsonArray['data'][12]);
            $('#terDoc').text(jsonArray['data'][13]);
            $('#numTerDoc').text(jsonArray['data'][14])
            //Datos del beneficiario

            //Datos personales
            $('#dirRes').text(jsonArray['data'][16]);
            $('#barrio').text(jsonArray['data'][17]);
            $('#localidad').text(jsonArray['data'][18]);
            $('#trabajo').text(jsonArray['data'][19]);
            $('#email').text(jsonArray['data'][20]);
            $('#telPrin').text(jsonArray['data'][21]);
            $('#telSec').text(jsonArray['data'][22]);
            $('#cuartoDoc').text(jsonArray['data'][23]);
            $('#numCuartoDoc').text(jsonArray['data'][24]);
            $('#instruccion').text(jsonArray['data'][25]);
            $('#area').text(jsonArray['data'][26]);
            $('#estadoMig').text(jsonArray['data'][27]);
            $('#cargaFam').text(jsonArray['data'][28]);
            //Datos personales

            //Datos medicos
            $('#discapacidad').text(jsonArray['data'][30]);
            $('#descDiscapacidad').text(jsonArray['data'][31]);
            $('#condicion').text(jsonArray['data'][32]);
            $('#descCondicion').text(jsonArray['data'][33]);
            //Datos medicos

            //Personas a cargo
            if (typeof jsonArray['familiares'] !== 'undefined' && jsonArray['familiares'].length > 0) {

                $("#cargaFamTitulo").show();

                $.each(jsonArray['familiares'],function(key,value){
                    var i = (key+1);
                    var fecha_nacFam = new Date(value[6]);
                    var tituloFamiliar = $('<div class="u-form-group u-form-name u-form-partition-factor-1 u-form-group-1"><h4 class="u-align-left u-text u-text-1">Familiar # '+i+'</h4></div>');
                    var tipoDoc = $('<div class="u-form-group u-form-name u-form-partition-factor-3 u-form-group-1"><label for="tipoDoc'+i+'" class="u-label">Tipo de documento: </label><label id="tipoDoc'+i+'" class="u-label datoBusqueda">'+value[2]+'</label></div>');
                    var numDoc = $('<div class="u-form-group u-form-name u-form-partition-factor-3 u-form-group-1"><label for="numDoc'+i+'" class="u-label">Número de documento: </label><label id="numDoc'+i+'" class="u-label datoBusqueda">'+value[1]+'</label></div>');
                    var vigDoc = $('<div class="u-form-group u-form-name u-form-partition-factor-3 u-form-group-1"><label for="vigDoc'+i+'" class="u-label">Vigencia Documento de Identidad: </label><label id="vigDoc'+i+'" class="u-label datoBusqueda">'+value[3]+'</label></div>');
                    var nombresFamiliar = $('<div class="u-form-group u-form-name u-form-partition-factor-2 u-form-group-1"><label for="nameFam'+i+'" class="u-label">Nombres: </label><label id="nameFam'+i+'" class="u-label datoBusqueda">'+value[4]+'</label></div>');
                    var apellidosFamiliar = $('<div class="u-form-group u-form-name u-form-partition-factor-2 u-form-group-2"><label for="lastNameFam'+i+'" class="u-label">Apellidos: </label><label id="lastNameFam'+i+'" class="u-label datoBusqueda">'+value[5]+'</label></div>');
                    var fecNacFam = $('<div class="u-form-group u-form-name u-form-partition-factor-3 u-form-group-2"><label for="fecNacFam'+i+'" class="u-label">Fecha de Nacimiento: </label><label id="fecNacFam'+i+'" class="u-label datoBusqueda">'+((fecha_nac.getDate() > 9) ? fecha_nac.getDate() : ('0' + fecha_nac.getDate())) + '/' + ((fecha_nac.getMonth() > 8) ? (fecha_nac.getMonth() + 1) : ('0' + (fecha_nac.getMonth() + 1))) + '/' + fecha_nac.getFullYear()+'</label></div>');
                    var sexoFam = $('<div class="u-form-group u-form-name u-form-partition-factor-3 u-form-group-1"><label for="sexoFam'+i+'" class="u-label">Sexo: </label><label id="sexoFam'+i+'" class="u-label datoBusqueda">'+value[8]+'</label></div>');
                    var parentezco = $('<div class="u-form-group u-form-name u-form-partition-factor-3 u-form-group-1"><label for="parentezco'+i+'" class="u-label">Parentezco: </label><label id="parentezco'+i+'" class="u-label datoBusqueda">'+value[12]+'</label></div>');
                    var telPrinFam = $('<div class="u-form-group u-form-name u-form-partition-factor-3 u-form-group-1"><label for="telPrinFam'+i+'" class="u-label">Teléfono Principal: </label><label id="telPrinFam'+i+'" class="u-label datoBusqueda">'+value[10]+'</label></div>');
                    var telSecFam = $('<div class="u-form-group u-form-name u-form-partition-factor-3 u-form-group-1"><label for="telSecFam'+i+'" class="u-label">Teléfono Secundario: </label><label id="telSecFam'+i+'" class="u-label datoBusqueda">'+value[11]+'</label></div>');
                    var ocupacionFam = $('<div class="u-form-group u-form-name u-form-partition-factor-3 u-form-group-1"><label for="ocupacion'+i+'" class="u-label">Ocupación: </label><label id="ocupacion'+i+'" class="u-label datoBusqueda">'+value[13]+'</label></div>');
                    var segTipoDocFam = $('<div class="u-form-group u-form-name u-form-partition-factor-4 u-form-group-1"><label for="segTipoDocFam'+i+'" class="u-label">Segundo Documento: </label><label id="segTipoDocFam'+i+'" class="u-label datoBusqueda">'+value[14]+'</label></div>');
                    var segNumDocFam = $('<div class="u-form-group u-form-name u-form-partition-factor-4 u-form-group-1"><label for="segNumDocFam'+i+'" class="u-label">Número de documento: </label><label id="segNumDocFam'+i+'" class="u-label datoBusqueda">'+value[15]+'</label></div>');
                    var terTipoDocFam = $('<div class="u-form-group u-form-name u-form-partition-factor-4 u-form-group-1"><label for="terTipoDocFam'+i+'" class="u-label">Tercer Documento: </label><label id="terTipoDocFam'+i+'" class="u-label datoBusqueda">'+value[16]+'</label></div>');
                    var terNumDocFam = $('<div class="u-form-group u-form-name u-form-partition-factor-4 u-form-group-1"><label for="terNumDocFam'+i+'" class="u-label">Número de documento: </label><label for="terNumDocFam'+i+'" class="u-label datoBusqueda">'+value[17]+'</label></div>');
                    var observaciones = $('<div class="u-form-group u-form-name u-form-partition-factor-1 u-form-group-1"><label for="observaciones'+i+'" class="u-label">Observaciones: </label><label id="observaciones'+i+'" class="u-label datoBusqueda">'+value[18]+'</label></div>');
                    var separador = $('<hr style="width:100%;text-align:left;margin-left:0px;margin-bottom:45px;"/>');
                    
    
                    $("#familiares").append(tituloFamiliar);
                    $("#familiares").append(tipoDoc);
                    $("#familiares").append(numDoc);
                    $("#familiares").append(vigDoc);
                    $("#familiares").append(nombresFamiliar);
                    $("#familiares").append(apellidosFamiliar);
                    $("#familiares").append(fecNacFam);
                    $("#familiares").append(sexoFam);
                    $("#familiares").append(parentezco);
                    $("#familiares").append(telPrinFam);
                    $("#familiares").append(telSecFam);
                    $("#familiares").append(ocupacionFam);
                    $("#familiares").append(segTipoDocFam);
                    $("#familiares").append(segNumDocFam);
                    $("#familiares").append(terTipoDocFam);
                    $("#familiares").append(terNumDocFam);
                    $("#familiares").append(observaciones);
                    $("#familiares").append(separador);
                });

                $("#familiares").show();
            } else {
                $("#cargaFamTitulo").hide();
            }
            //Personas a cargo

            $('#loadingContainer').hide();
            $("#noResultContainer").hide();
            $("#resultContainer").show();
        } else {
            $('#loadingContainer').hide();
            $("#resultContainer").hide();
            $("#noResultContainer").show();
        }   
    }
});