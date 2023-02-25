const firebaseConfig = {
    apiKey: "AIzaSyA9ZFj9BAjxkMCMUDcgXViSOcP1-gGkqOw",
    authDomain: "steamappproject.firebaseapp.com",
    databaseURL: "https://steamappproject-default-rtdb.firebaseio.com",
    projectId: "steamappproject",
    storageBucket: "steamappproject.appspot.com",
    messagingSenderId: "797315787435",
    appId: "1:797315787435:web:b74248307a45fba2bb25ee",
    measurementId: "G-0ZXNZZYC56"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function resetFields(){
    document.getElementById("Input1").value='';
    document.getElementById("Input2").value='';
    document.getElementById("Input3").value='';
    document.getElementById("Input4").value='';
    document.getElementById("Input5").value='selecciona';
    document.getElementById("Input6").value='';
    document.getElementById("Input7").value='';
}
function createR() {
    document.getElementById("Input1").disabled = false;
    //Guardo los datos capturados usando el id de cada control
    var id = document.getElementById("Input1").value;
    var titulo = document.getElementById("Input2").value;
    var desarrollador = document.getElementById("Input3").value;
    var distribuidor = document.getElementById("Input4").value;
    var plataforma = document.getElementById("Input5").value;
    var fechalanzamiento = document.getElementById("Input6").value;
    var ultimaactualizacion = document.getElementById("Input4").value;

    //validaciones
    if (id.length > 0) {
        //creo un objeto que guarda los datos
        var juego = {
            id, //matricula:id
            titulo,
            desarrollador,
            distribuidor,
            plataforma,
            fechalanzamiento,
            ultimaactualizacion,
        }

        //console.log(alumno);

        firebase.database().ref('Juegos/' + id).update(juego).then(() => {
           resetFields();
        }).then(()=>{
           read();
        });

        swal("Listo!", "Agregado correctamente", "success");

        
    } 
    else {
        swal("Error", "Llena todos los campos","warning");
    }

    document.getElementById("Input1").disabled = false;
        //firebase.database().ref('users/' + userId).set({
    //    username: name,
    //    email: email,
    //    profile_picture : imageUrl
    //  });
    //https://firebase.google.com/docs/database/web/read-and-write?hl=es

  
    //Esto se usa cuando no tienen un id/matricula y Firebase les genera una
    //automaticamente
    //const key = firebase.database().ref().child('Alumnos').push().key;
    //data[`Alumnos/${key}`]= alumno;
    //firebase.database().ref().update(data).then(()=>{
    //  alert('Agregado exitosamente');
    //})
}

function read(){
    document.getElementById("Table1").innerHTML='';

    var ref = firebase.database().ref('Alumnos');
/**   
   ref.on('value', function(snapshot) {
        snapshot.forEach(row=>{
            printRow(row.val());
        })
    });
 */
   
    ref.on("child_added", function(snapshot) {
        printRow(snapshot.val());
    });

}

function printRow(juego){
    
    if(juego!=null){
        var table = document.getElementById("Table1"); 

        //creamos un nuevo elemento en la tabla en la ultima posicion
        var row = table.insertRow(-1);

        //Insertamos cada una de las celdas/columnas del registro
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        
        //Agregamos la informacion a cada una de las columnas del registro
        cell1.innerHTML = juego.id;
        cell2.innerHTML = juego.titulo; 
        cell3.innerHTML = juego.desarrollador;
        cell4.innerHTML = juego.distribuidor; 
        cell5.innerHTML = juego.plataforma;
        cell6.innerHTML = juego.fechalanzamiento;
        cell7.innerHTML = juego.ultimaactualizacion;
        cell8.innerHTML = `<button type="button" class="btn btn-danger" onClick="deleteR(${juego.id})">Eliminar</button>`;
        cell9.innerHTML = '<button type="button" class="btn btn-success" onClick="seekR('+juego.id+')">Modificar</button>';
    }
}

function deleteR(id){
    firebase.database().ref('Juegos/' + id).set(null).then(() => {
      read();
    }).then(()=>{
       swal("Listo!", "Eliminado correctamente", "success");
    });
}

function seekR(id){
    var ref = firebase.database().ref('Juegos/' + id);
    ref.on('value', function(snapshot) {
      updateR(snapshot.val());
    });
}

function updateR(juego){
    if(alumno!=null)
    {
        document.getElementById("Input1").value=juego.id;
        document.getElementById("Input1").disabled = true;
        document.getElementById("Input2").value=juego.titulo;
        document.getElementById("Input3").value=juego.desarrollador;
        document.getElementById("Input4").value=juego.distribuidor;
        document.getElementById("Input5").value=juego.plataforma;
        document.getElementById("Input6").value=juego.fechalanzamiento;
        document.getElementById("Input4").value=juego.ultimaactualizacion;
    }
}


//Para consulta de carrera
function readQ(){
    document.getElementById("Table2").innerHTML='';
    var c = document.getElementById("Input5").value;

    var ref = firebase.database().ref("Juegos");
    ref.orderByChild("plataforma").equalTo(c).on("child_added", function(snapshot) {
        printRowQ(snapshot.val());
    });

}


function printRowQ(alumno){

    var table = document.getElementById("Table2"); 
    
    //creamos un nuevo elemento en la tabla en la ultima posicion
    var row = table.insertRow(-1);

    //Insertamos cada una de las celdas/columnas del registro
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    
    //Agregamos la informacion a cada una de las columnas del registro
    cell1.innerHTML = juego.id;
    cell2.innerHTML = juego.titulo; 
    cell3.innerHTML = juego.desarrollador;
    cell4.innerHTML = juego.distribuidor; 
    cell5.innerHTML = juego.plataforma;
    cell6.innerHTML = juego.fechalanzamiento;
    cell7.innerHTML = juego.ultimaactualizacion;
   
}