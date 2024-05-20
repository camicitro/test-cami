
const router = require("./userRoute")


const pathRouter = `${__dirname}`

const removeExtension = (fileName) => {
    return fileName.split('.').shift()

}

fs.readdirSync(pathRouter).filter((file) => {
    const withoutExt = removeExtension(file)
    const skip = ['index'].includes(withoutExt)
    if (!skip) {
        router.use(`/${withoutExt}`, require(`./${withoutExt}`))
        console.log('Cargar ruta: ', withoutExt)
    }
})