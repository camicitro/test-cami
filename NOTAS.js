//***SERVIDOR HTTP CON NODE***

const http = require('node:http')

const server = http.createServer((req, res) => {
	console.log('request received')
	res.end('Hola mundo')

})

//escuchar el servidor
//si coloco el cero y eso de abajo, siempre que lo ejecute me va a dar un puerto que este libre
server.listen(0, () => {
	console.log(`server listening on port http://localhost:${server.address().port}`)
})


//***tener cuidado si el puerto en el q estoy intentando ya esta en uso***
