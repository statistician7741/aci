const express = require('express')
var router = express.Router()
const querystring = require("querystring");

const axios = require("axios");
const env = require("../config/env.config");

function getPegawai( req, res ) {
    axios({
        method: 'post',
        url: 'http://pbd.bps.go.id/simpeg_api/kolaka_7404',
        data: querystring.stringify({ 
            "apiKey": env.SIMPEG_API_KEY,
            "kategori": 'view_pegawai',
            "kdorg": req.params?req.params.kdorg:"",
            "nip": req.params?req.params.nip:""
         })
      })
      .then(function (response) {
        return res.send(response.data)
      })
      .catch(function (error) {
        console.log(error);
        return res.send("err");
      });
}

router.get( "/", getPegawai )
router.get( "/get_pegawai/:nip", getPegawai )
router.get( "/get_pegawai/:nip/:kdorg", getPegawai )

module.exports = router;