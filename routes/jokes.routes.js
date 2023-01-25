const ControladorJakes = require("../controller/jokes.controller");

module.exports = (app) => {
    app.get('/api/listarchistes', ControladorJakes.listarChistes);
    app.get('/api/listarchiste/:id', ControladorJakes.listarChiste);
    app.post('/api/crearchiste', ControladorJakes.crearChiste);
    app.put('/api/editarchiste/:id', ControladorJakes.editarChiste);
    app.delete('/api/eliminarchiste/:id', ControladorJakes.eliminarChiste);
}