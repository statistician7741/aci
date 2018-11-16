//core server
const express = require("express");
const next = require("next");

//https
const https = require("https");
const fs = require("fs");
const privateKey  = fs.readFileSync('./cert/key-20180830-080644.pem', 'utf8');
const certificate = fs.readFileSync('./cert/cert-20180830-080644.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};

const port = process.env.PORT || 80;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();
        const cookieParser = require("cookie-parser");
        const bodyParser = require("body-parser");
        server.use(cookieParser("ID==&&%^&A&SHBJSAsjhbJGhUGkbKiUvii^%^#$%^&98G8UIugg=="));
        server.use(bodyParser.urlencoded({ extended: true }));

        server.use('/api/pegawai', require("./api/pegawai.api"));

        server.get("/", ( req, res ) => {
            return app.render( req, res, "/cuti/summary", req.query );
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })
    
        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
        //https
        var httpsServer = https.createServer(credentials, server);
        httpsServer.listen(443);
    })