module.exports = function (app) {


    var grafana = require('../controllers/grafana.controller.js');

    app.get('/grafana', grafana.capture);

}
