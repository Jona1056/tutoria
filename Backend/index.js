const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
let estudiantes =[]

class Estudiante {
    constructor(carnet,nombre,apellido){
        this.carnet = carnet;
        this.nombre = nombre;
        this.apellido =apellido;
    }
}

app.get('/CargarUsuarios', (req, res) => {
    const nombre = "Jonatan"
    const apellido = "Garcia"
    const carnet = "202000424"
    const nuevoUsuario = new Estudiante(carnet,nombre,apellido)
    estudiantes.push(nuevoUsuario)
    res.json(estudiantes[0].carnet)
});


app.post('/upload_data', (req, res) => {
  // Acceder al texto del JSON enviado
  const data = req.body;

  // Recorrer el JSON y hacer algo con sus propiedades
  const info = JSON.parse(data.jsonData);
  info.forEach((obj) => {
    console.log('Carnet:', obj.carnet);
    console.log('Nombre:', obj.nombre);
    console.log('Apellido:', obj.apellido);
  })
  // Envía una respuesta de éxito
  res.status(200).send('Datos JSON recibidos con éxito.');
});


app.listen(PORT,() =>{
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

