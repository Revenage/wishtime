/**
 * Created by reven on 10.03.2016.
 */
var mongoose = require('mongoose');
var logger = require('./logger')(module);
var config = require('./config');
var UserModel = require('../models/user');
//var NoteModel = require('./note-model');

mongoose.connect( config.get('mongoose:uri') );
var db = mongoose.connection;

db.on('error', function(err) {
    logger.error('connection error: ', err.message);
});

db.once('open', function callback () {
    logger.info('Connected to DB!');
});

module.exports = {
    UserModel   : UserModel
    /*,NoteModel   : NoteModel*/
};
