var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var client = new Client();
/* GET users listing. */
router.get('/', function(req, res, next) {
    let queries=req.query
    console.log('query: ', queries);
    let url='https://api.hahow.in/api/group/web-frontend/courses?page=1'
    var options = {
        host: url,
        method: 'GET'
      };
    
    client.get(url, function (data, response) { 
        res.json({...data})
    });
});

module.exports = router;