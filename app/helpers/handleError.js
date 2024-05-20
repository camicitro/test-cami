const httpError = (res, err) => {
    console.log(err)
    res.status(500)
    res.send({error: 'Hubo un problema'})

}

module.exports = {httpError}