var path = require('path');
var express = require('express');
var slashes = require('connect-slashes');
var cors = require('cors');
var Songs = require('./songs');
import {componentSchema} from "./schema";
import graphqlHTTP from "express-graphql";
const bodyParser = require('body-parser'); //NPM require
var STATIC_DIR = path.join(__dirname, '../client/build');

module.exports = function createApp(options) {
    var library = new Songs(path.join(__dirname, '../', 'graphql/data'));

    var app = express();
 
    app.use(express.static(STATIC_DIR));
    app.use(slashes(false));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());

    app.get('/library', function(req, res) {
        let searchterm=req.query && req.query.search ? req.query.search : '';
        if(searchterm){

 var data = library.getLibrary();
 var data1 = data.filter(function(res) {
     let s=(res.title).toLowerCase();
    if (s.indexOf(searchterm) !== -1) {
    return true ;
    }
  });
        res.json(data1);
        }
        else{
 var data = library.getLibrary();
        res.json(data);
        }
       
    });
   
    app.get('/library/:id', function(req, res) {
        var id = parseInt(req.params.id, 10);
        var data = library.getSong(id);

        res.json(data);
    });

    app.get('/playlist', function(req, res) {
        var data = library.getPlaylists(function(err, playlists) {
            res.json(playlists);
        });
    });
   

    app.post('/playlist', function(req, res) {
        var data = req.body;


        var name = data.name
        var songs = data.songs

        library.savePlaylist(null, name, songs, function(err, id) {
            res.json({
                id: id
            });
        });
    });

    app.get('/playlist/:id', function(req, res) {
        var id = parseInt(req.params.id, 10);
        var data = library.getPlaylist(id);

        res.json(data);
    });

    app.post('/playlist/:id', function(req, res) {
        var id = parseInt(req.params.id, 10);
        var data = req.body;
        var data1 = library.getPlaylist(id);
        res.json(data1);
        let getsongs=data1.songs;
        let arr1=data.songs
   
        var name = data1.name;
        var songs =  [...getsongs, ...arr1];
        library.savePlaylist(id, name, songs, function(err, id) {

        });
    });

    app.delete('/playlist/:id', function(req, res) {
        var id = parseInt(req.params.id, 10);
        var data = library.deletePlaylist(id);
        res.status(200);
        res.json({});
    });
    app.use("/graphql", (req, res, next) => {
        const root = {};
        root.domainUrl = req.protocol + "://" + req.get("host");
        root.req = req;
        // console.log("started",root)
        const graphqlHTTPHandler = graphqlHTTP({
          schema: componentSchema,
        context: root,
    
          graphiql: true
        });
        graphqlHTTPHandler(req, res)
          .then(() => {
            res.end();
          })
          .catch(e => {
            next(e);
          });
      });

    return app;
};