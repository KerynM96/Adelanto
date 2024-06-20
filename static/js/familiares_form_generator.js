$(window).load(function(){
    var cantFamiliares = localStorage.getItem("cantCargaFam");

    for(var i = 1; i <= cantFamiliares; i++) {
        var tituloFamiliar = $('<div class="u-form-group u-form-name u-form-partition-factor-1 u-form-group-1"><h4 class="u-align-left u-text u-text-1">Familiar # '+i+'</h4></div>');
        var tipoDoc = $('<div class="u-form-group u-form-name u-form-partition-factor-3 u-form-group-1"><label for="tipoDoc'+i+'" class="u-label">* Tipo de documento</label><select class="u-input u-input-rectangle" id="tipoDoc'+i+'" name="tipoDoc'+i+'" required><option value="" disabled selected hidden>Seleccione tipo de documento</option><option value="cedulaciudadania">Cedula de Ciudadania</option><option value="cedulaidentidad">Cedula de Identidad</option><option value="pasaporte">Pasaporte</option></select></div>');
        var numDoc = $('<div class="u-form-group u-form-name u-form-partition-factor-3 u-form-group-1"><label for="numDoc'+i+'" class="u-label">* Número de documento</label><input class="u-input u-input-rectangle" type="number" id="numDoc'+i+'" name="numDoc'+i+'" maxlength="10" placeholder="Ingrese número de documento" autofocus required/></div>');
        var vigDoc = $('<div class="u-form-group u-form-name u-form-partition-factor-3 u-form-group-1"><label for="vigDoc'+i+'" class="u-label">* Vigencia Documento de Identidad</label><select class="u-input u-input-rectangle" id="vigDoc'+i+'" name="vigDoc'+i+'" required><option value="" disabled selected hidden>Seleccione una vigencia</option><option value="vigente">Vigente</option><option value="vencido">Vencido</option></select></div>');
        var nombresFamiliar = $('<div class="u-form-group u-form-name u-form-partition-factor-2 u-form-group-1"><label for="nameFam'+i+'" class="u-label">* Nombres</label><input type="text" placeholder="Ingresge los nombre completos" id="nameFam'+i+'" name="nameFam'+i+'" class="u-input u-input-rectangle" required=""></div>');
        var apellidosFamiliar = $('<div class="u-form-group u-form-name u-form-partition-factor-2 u-form-group-2"><label for="lastNameFam'+i+'" class="u-label">* Apellidos</label><input type="text" placeholder="Ingrese los apellidos completos" id="lastNameFam'+i+'" name="lastNameFam'+i+'" class="u-input u-input-rectangle" required=""></div>');
        var fecNacFam = $('<div class="u-form-group u-form-name u-form-partition-factor-3 u-form-group-2"><label for="fecNacFam'+i+'" class="u-label">* Fecha de Nacimiento</label><input type="date" id="fecNacFam'+i+'" name="fecNacFam'+i+'" class="u-input u-input-rectangle" required=""></div>');
        var sexoFam = $('<div class="u-form-group u-form-name u-form-partition-factor-3 u-form-group-1"><label for="sexoFam'+i+'" class="u-label">* Sexo</label><select class="u-input u-input-rectangle" id="sexoFam'+i+'" name="sexoFam'+i+'" required><option value="" disabled selected hidden>Seleccione un sexo</option><option value="masculino">Masculino</option><option value="femenino">Femenino</option> <option value="otro">Otro</option></select></div>');
        var parentezco = $('<div class="u-form-group u-form-name u-form-partition-factor-3 u-form-group-1"><label for="parentezco'+i+'" class="u-label">* Parentezco</label><select class="u-input u-input-rectangle" id="parentezco'+i+'" name="parentezco'+i+'" required><option value="" disabled selected hidden>Seleccione el parentezco</option><option value="esposo">Esposo/a</option><option value="conyugue">Conyugue</option><option value="hijos">Hijo/a</option> <option value="padre">Padre</option><option value="madre">Madre</option><option value="suegros">Suegro/a</option></select></div>');
        var telPrinFam = $('<div class="u-form-group u-form-name u-form-partition-factor-3 u-form-group-1"><label for="telPrinFam'+i+'" class="u-label">* Teléfono Principal</label><input class="u-input u-input-rectangle" type="number" id="telPrinFam'+i+'" name="telPrinFam'+i+'" maxlength="10" placeholder="Ingrese teléfono principal" autofocus required/></div>');
        var telSecFam = $('<div class="u-form-group u-form-name u-form-partition-factor-3 u-form-group-1"><label for="telSecFam'+i+'" class="u-label">* Teléfono Secundario</label><input class="u-input u-input-rectangle" type="number" id="telSecFam'+i+'" name="telSecFam'+i+'" maxlength="10" placeholder="Ingrese teléfono secundario" autofocus required/></div>');
        var ocupacionFam = $('<div class="u-form-group u-form-name u-form-partition-factor-3 u-form-group-1"><label for="ocupacion'+i+'" class="u-label">* Ocupación</label><input type="text" placeholder="Ingresge la ocupación" id="ocupacion'+i+'" name="ocupacion'+i+'" class="u-input u-input-rectangle" required=""></div>');
        var segTipoDocFam = $('<div class="u-form-group u-form-name u-form-partition-factor-4 u-form-group-1"><label for="segTipoDocFam'+i+'" class="u-label">* Segundo Documento</label><select class="u-input u-input-rectangle" id="segTipoDocFam'+i+'" name="segTipoDocFam'+i+'" required><option value="" disabled selected hidden>Seleccione tipo de documento</option><option value="premiso">Permiso Protección Temporal</option><option value="cedulaextranjeria">Cedula Extranjeria</option><option value="salvoconducto">Salvocondunto</option><option value="no">No tiene otro documento</option></select></div>');
        var segNumDocFam = $('<div class="u-form-group u-form-name u-form-partition-factor-4 u-form-group-1"><label for="segNumDocFam'+i+'" class="u-label">* Número de documento</label><input class="u-input u-input-rectangle" type="number" id="segNumDocFam'+i+'" name="segNumDocFam'+i+'" maxlength="10" placeholder="Ingrese número de documento" autofocus required/></div>');
        var terTipoDocFam = $('<div class="u-form-group u-form-name u-form-partition-factor-4 u-form-group-1"><label for="terTipoDocFam'+i+'" class="u-label">* Tercer Documento</label><select class="u-input u-input-rectangle" id="terTipoDocFam'+i+'" name="terTipoDocFam'+i+'" required><option value="" disabled selected hidden>Seleccione tipo de documento</option><option value="premiso">Permiso Protección Temporal</option><option value="cedulaextranjeria">Cedula Extranjeria</option><option value="salvoconducto">Salvocondunto</option><option value="no">No tiene otro documento</option></select></div>');
        var terNumDocFam = $('<div class="u-form-group u-form-name u-form-partition-factor-4 u-form-group-1"><label for="terNumDocFam'+i+'" class="u-label">* Número de documento</label><input class="u-input u-input-rectangle" type="number" id="terNumDocFam'+i+'" name="terNumDocFam'+i+'" maxlength="10" placeholder="Ingrese número de documento" autofocus required/></div>');
        var observaciones = $('<div class="u-form-group u-form-name u-form-partition-factor-1 u-form-group-1"><label for="observaciones'+i+'" class="u-label">Observaciones</label><textarea id="observaciones'+i+'" name="observaciones'+i+'" class="u-input u-input-rectangle" rows="4" cols="50"></textarea></div>');
        var separador = $('<hr style="width:100%;text-align:left;margin-left:0px;margin-bottom:45px;"/>');

        $("#containerInfoFamiliares").append(tituloFamiliar);
        $("#containerInfoFamiliares").append(tipoDoc);
        $("#containerInfoFamiliares").append(numDoc);
        $("#containerInfoFamiliares").append(vigDoc);
        $("#containerInfoFamiliares").append(nombresFamiliar);
        $("#containerInfoFamiliares").append(apellidosFamiliar);
        $("#containerInfoFamiliares").append(fecNacFam);
        $("#containerInfoFamiliares").append(sexoFam);
        $("#containerInfoFamiliares").append(parentezco);
        $("#containerInfoFamiliares").append(telPrinFam);
        $("#containerInfoFamiliares").append(telSecFam);
        $("#containerInfoFamiliares").append(ocupacionFam);
        $("#containerInfoFamiliares").append(segTipoDocFam);
        $("#containerInfoFamiliares").append(segNumDocFam);
        $("#containerInfoFamiliares").append(terTipoDocFam);
        $("#containerInfoFamiliares").append(terNumDocFam);
        $("#containerInfoFamiliares").append(observaciones);

        if(i < cantFamiliares) {
            $("#containerInfoFamiliares").append(separador);
        }   
    }     
});
