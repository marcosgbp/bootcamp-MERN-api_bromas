const Jokes = require('../module/jokes.model');

//Listar Chistes
const listarChistes = (req, res) => {
    Jokes.find(req.body)
    .then((resultado)=>{
        console.log(resultado);
        res.json(resultado)
    }).catch((error)=>{
        console.log(error);
    })
}
//Listar un Chiste
const listarChiste = (req, res) => {
    Jokes.findOne({_id:req.params.id}, req.body)
    .then((resultado)=>{
        res.json(resultado);
    }).catch((error)=> {
        console.log(error)
    })
}

//Crear Chiste
const crearChiste = (req, res) => {
    Jokes.create(req.body)
    .then((resultado)=> {
        console.log(resultado);
        res.json(resultado);
    }).catch((error)=>{
        console.log(error);
    })
}

//Editar Chiste
const editarChiste = (req, res) => {
    Jokes.updateOne({_id:req.params.id}, req.body)
    .then((resultado)=>{
        res.json(resultado);
    }).catch((error)=>{
        console.log(error);
    });
}

//Eliminar Chiste
const eliminarChiste = (req, res)=> {
    Jokes.deleteOne({_id:req.params.id})
    .then((resultado)=> {
        res.json(resultado)
    }).catch((error)=> {
        console.log(error);
    })
}

module.exports = {
    listarChistes,
    listarChiste,
    crearChiste,
    editarChiste,
    eliminarChiste
}