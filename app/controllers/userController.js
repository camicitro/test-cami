//En los controladores van acciones y operaciones sobre bd

const { httpError } = require("../helpers/handleError")
const userModel = require('../models/userModel')

const getUser = (req, res) => {
    try{
        const userId = req.params.id;
        //revisar pq en un video dice q si tenemos err en el call back no podemos usar try-catch
        userModel.findById(userId, (err, user) => {
            if(!user){
                return res.status(404).send({message: 'El usuario no fue encontrado'})
            }
            findUser(req.user.sub, userId).then((value) => {
                return res.status(200).send({
                    user,
                    following: value.following,
                    followed: value.followed
                })
            })
        })
    } catch (e){
        return res.status(500).send({message: 'Error en petición'})
    }
}

const getUsers = (req, res) => {
    try{

    } catch (e){
        
    }
}

const createUser = async (req, res) => {
    try{
        const {name, age, email, dir} = req.body
        const resDetail = await userModel.create({

        })
    } catch (e){
        httpError(res, e)
    }
}

const updateUser = (req, res) => {
    try{

    } catch (e){
        
    }
}

const deleteUser = (req, res) => {
    try{

    } catch (e){
        
    }
}

module.exports = {getUser, getUsers, deleteUser, createUser, updateUser}