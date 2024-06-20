from flask import Flask, jsonify, render_template, request
import mysql.connector

app = Flask(__name__)

# Configurar la conexión
dbCaracterizacion = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="caracterizaciones"
)

cursorCaracterizacion = dbCaracterizacion.cursor()

@app.route('/')
def index():
    return render_template('index/index.html')

@app.route('/auth', methods=["GET"])
def auth():
    usuario = request.args.get('username')
    password = request.args.get('password')
    
    cursor = dbCaracterizacion.cursor(dictionary=True)
    cursor.execute("SELECT Usuario, Contraseña, Rol from usuarios WHERE Usuario = %s AND Contraseña = %s",(usuario, password))
    resultado = cursor.fetchone()

    if not resultado:
        return jsonify({"mensaje":"failed"})

    return resultado

@app.route('/caracterizacion')
def caracterizacion():
    return render_template('formCaracterizacion/caracterizacion.html')

@app.route('/registrocaracterizacion', methods=['GET'])
def registroCaracterizacion():
    Num_doc = request.args.get('num_doc')
    Tipo_Doc = request.args.get('tipo_documento')
    Vigencia_doc = request.args.get('vig_doc')
    Nombres = request.args.get('nombres')
    Apellidos = request.args.get('apellidos')
    Fecha_Nacimiento = request.args.get('fecha_nac')
    Sexo = request.args.get('sexo')
    Edad = request.args.get('edad')
    Pasaporte = request.args.get('pasaporte')
    Vigencia_pas = request.args.get('vig_pasaporte')
    Num_pas = request.args.get('num_pas')
    Seg_Doc = request.args.get('seg_doc')
    Num_seg_doc = request.args.get('numseg_doc')
    Ter_Doc = request.args.get('ter_doc')
    Num_ter_doc = request.args.get('numter_doc')
    
    cursorCaracterizacion.execute("INSERT INTO personas(Num_Doc	,Tipo_Doc,Vigencia_doc,Nombres,Apellidos,Fecha_Nacimiento,Sexo,Edad,Pasaporte,Vigencia_pas,Num_pas,Seg_Doc,Num_seg_doc,Ter_Doc,Num_ter_doc)VALUES(%s, %s, %s, %s, %s,%s, %s, %s, %s, %s,%s, %s, %s, %s, %s)",
    (Num_doc,Tipo_Doc,Vigencia_doc,Nombres,Apellidos,Fecha_Nacimiento,Sexo,Edad,Pasaporte,Vigencia_pas,Num_pas,Seg_Doc,Num_seg_doc,Ter_Doc,Num_ter_doc))
    dbCaracterizacion.commit()
    return jsonify({"mensaje": "ok"})

@app.route('/datospersonales')
def datospersonales():
    return render_template('formDatosPersonales/datospersonales.html')

@app.route('/registrodatospersonales', methods=['GET'])
def registrodatospersonales():
    Num_Doc_DP = request.args.get('num_doc')
    Direccion_Residencia = request.args.get('dir_res')
    Barrio = request.args.get('barrio')
    Localidad = request.args.get('localidad')
    Trabajo = request.args.get('trabajo')
    Correo = request.args.get('correo')
    Telefono_1 = request.args.get('num_1')
    Telefono_2 = request.args.get('num_2')
    Cuar_Doc = request.args.get('cuar_doc')
    Num_cuar_doc = request.args.get('num_cuardoc')
    Grado_Instruccion = request.args.get('instruccion')
    Area_instruccion = request.args.get('area')
    Situacion_Migratoria = request.args.get('est_mig')
    Cant_personas = request.args.get('resp')
    
    # Insertar datos a la tabla de mysql
    cursorCaracterizacion.execute("INSERT INTO informacion_personal(Num_Doc,Direccion_Residencia,Barrio,Localidad,Trabajo,Correo,Telefono_1,Telefono_2,Cuar_Doc,Num_cuar_doc,Grado_Instruccion,Area_instruccion,Situacion_Migratoria,Cant_cargafam)VALUES(%s,%s, %s, %s, %s,%s, %s, %s, %s,%s, %s, %s,%s,%s)",
    (Num_Doc_DP,Direccion_Residencia,Localidad,Barrio,Trabajo,Correo,Telefono_1,Telefono_2,Cuar_Doc,Num_cuar_doc,Grado_Instruccion,Area_instruccion,Situacion_Migratoria,Cant_personas))
    dbCaracterizacion.commit()

    return jsonify({"mensaje": "ok"})

@app.route('/infomedica')
def iformacionmedica():
    return render_template('formInfoMedica/infomedica.html')

@app.route('/registroinfomedica', methods=['GET'])
def registroiformacionmedica():
    Num_Doc_DP = request.args.get('num_doc')
    Discapacidad = request.args.get('discapacidad')
    Descripcion_dis = request.args.get('desc_disc')
    Condicion_medica = request.args.get('cond_med')
    Descripcion_cond = request.args.get('des_cond_med')
    
    # Insertar datos a la tabla de mysql
    cursorCaracterizacion.execute("INSERT INTO informacion_medica(Num_Doc,Discapacidad,Desc_Discapacidad,Cond_Medica,Desc_Medica)VALUES(%s, %s, %s, %s, %s)",
    (Num_Doc_DP,Discapacidad,Descripcion_dis,Condicion_medica,Descripcion_cond))
    dbCaracterizacion.commit()

    return jsonify({"mensaje": "ok"})

@app.route('/familiares')
def registrofamiliares():
    return render_template('formFamiliares/resgistrofamiliares.html')

@app.route('/registroInfoFamiliares', methods=['GET'])
def registroInfofamiliares():
    Num_Doc_DP = request.args.get('num_doc')
    Numero_doc = request.args.get('num_doc_ref')
    Tipo_doc_ref = request.args.get('tip_doc')
    Vigencia_doc_ref = request.args.get('vig_doc_id')
    Nombres_ref = request.args.get('nom_ref')
    Apellidos_ref= request.args.get('ape_ref')
    Fecha_nac_ref= request.args.get('fec_nac')
    Edad_ref= request.args.get('edad_ref')
    Sexo_ref = request.args.get('sex_ref')
    Telefono_1_ref= request.args.get('tel_ref1')
    Telefono_2_ref = request.args.get('tel_ref2')
    Parentesco = request.args.get('parentesco')
    Ocupacion = request.args.get('ocupacion')
    Seg_doc_ref = request.args.get('seg_doc_ref')
    Num_segdoc_ref = request.args.get('num_segdoc_ref')
    Terc_doc_ref = request.args.get('ter_doc_ref')
    Num_terdoc_ref = request.args.get('num_terdoc_ref')
    Observaciones = request.args.get('observaciones')
    
    cursorCaracterizacion.execute("INSERT INTO familiares(Num_Doc,Num_doc_ref,Tipo_doc,Vig_doc,Nom_ref,Ape_ref,Fecha_Nacimiento,Edad,Sexo,Telef_1_ref,Telef_2_ref,Parentesco,Ocupacion,Seg_doc_ref,Num_segdoc_ref,Terc_doc_ref,Num_terdoc_ref,Observacion)VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
    (Num_Doc_DP,Numero_doc,Tipo_doc_ref,Vigencia_doc_ref,Nombres_ref,Apellidos_ref,Fecha_nac_ref,Edad_ref,Sexo_ref,Telefono_1_ref,Telefono_2_ref,Parentesco,Ocupacion,Seg_doc_ref,Num_segdoc_ref,Terc_doc_ref,Num_terdoc_ref,Observaciones))
    dbCaracterizacion.commit()

    return jsonify({"mensaje": "ok"})

@app.route('/busqueda', methods=['GET', 'POST'])
def busqueda():
    return render_template('busquedaPersonas/busquedapersonas.html')

@app.route('/busquedapersonas', methods=['GET'])
def busquedapersonas():
    Num_Doc = request.args.get('num_doc')

    #Busqueda de informacion completa de la persona
    cursorCaracterizacion.execute("SELECT * FROM personas as p INNER JOIN informacion_personal as ip ON ip.Num_Doc = p.Num_DoC INNER JOIN informacion_medica as im ON im.Num_doc = p.Num_Doc WHERE p.Num_Doc = %s",
    (Num_Doc,))
    infoPersonal = cursorCaracterizacion.fetchone()

    #Busqueda de los familiares de la persona
    cursorCaracterizacion.execute("SELECT * FROM familiares WHERE Num_Doc = %s",
    (Num_Doc,))
    infoFamiliar = cursorCaracterizacion.fetchall()

    return jsonify({"data": infoPersonal, "familiares": infoFamiliar})

if __name__ == '__main__':
    app.run(debug=True)

