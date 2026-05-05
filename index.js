const express = require('express')
const cors = require('cors')
const app = express()
const tareas =[
    {id:1, texto: 'Aprender Node.js', completada:false},
    {id:2, texto:'Hacer ejercicio', completada:true},
]

app.use(cors())        // ← permite peticiones desde el navegador
app.use(express.json()) // ← permite leer JSON del body

app.get('/tareas', function(peticion, respuesta) {
  respuesta.json(tareas)
      
})
app.get('/tareas/:id', async function(peticion, respuesta) {

  const id = peticion.params.id  // ← lees el id de la URL
  const tarea = tareas.find(t => t.id === Number(id))  // ← buscas en el array
  
  if(!tarea) {
    respuesta.status(404).json({ error: 'Tarea no encontrada' })
    return
  }
  
  respuesta.json(tarea)
})

app.post('/tareas', async function(peticion, respuesta) {
  
})
app.delete('/tareas/:id', async function(peticion, respuesta) {
  
})

app.listen(3000, function() {
  console.log('Servidor corriendo en http://localhost:3000')
})