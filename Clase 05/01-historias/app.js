var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require("cookie-session");
var bodyParser = require('body-parser');
var modelo = require("./modelos/modeloUsuarios");
var credenciales = require("./credenciales");

var passport = require("passport");
var passportLocal = require("passport-local").Strategy;
var passportFacebook = require("passport-facebook").Strategy;

var routes = require('./routes/index');
var users = require('./routes/users');
var auth = require('./routes/auth');
var medicos = require("./routes/medicos");
var enfermeros = require("./routes/enfermeros");
var pilotos = require("./routes/pilotos");
var companias = require("./routes/companias");
var historias = require("./routes/historias");

passport.serializeUser(function(usuario, done){
  console.log("Proceso de serialización");
  console.log(usuario);
  done(null, usuario);
});

passport.deserializeUser(function(usuario, done){
  console.log("Proceso de deserialización");
  console.log(usuario);
  done(null, usuario);
});


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

///////////////////////////////
// ESTRATEGIA CON BASE DE DATOS
///////////////////////////////
passport.use(new passportLocal(
      {
        usernameField: "cusuario",
        passwordField: "ccontrasena"
      },

      function(usuario, contrasena, done) {
        var registro = {
          cusuario: usuario,
          ccontrasena: contrasena
        };

        console.log("Validando usuario y contraseña");
        modelo.validar(registro, function(err, registros){
          if(registros.length==0){
            done(false, null);
            //res.redirect("/");
          } else {
            done(null, registros[0]);
            //res.redirect("/home");
          }
        });
      }

));

///////////////////////////////
// ESTRATEGIA CON FACEBOOK
///////////////////////////////
passport.use(new passportFacebook(
   {
    clientID: credenciales.facebook.clavePublica,
    clientSecret: credenciales.facebook.clavePrivada,
    callbackURL: credenciales.facebook.rutaCB,
    profileFields: ['id', 'displayName','photos']
   },
   function(accessToken, refreshToken, profile, done){

      modelo.validarRedSocial(profile.id, function(err, registros){
          if(err) {return done(err);}

          if(registros.length==0) {
            var obj = {};
            obj.perfilid = profile.id;
            obj.credsocial = profile.provider;
            obj.cnombre = profile.displayName;
            obj.cfoto = profile.photos[0].value;

            modelo.insertarRedSocial(obj, function(err){
              if(err) return done(null, false);
              return done(null, obj);
            })
          } else {
            return done(null, registros[0]);
          }
        })




   }

));



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieSession({secret: "123456"}));

app.use(passport.initialize());
app.use(passport.session());







app.use('/', routes);
app.use('/users', users);
app.use('/auth', auth);
app.use("/medicos", medicos);
app.use("/enfermeros", enfermeros);
app.use("/pilotos", pilotos);
app.use("/companias", companias);
app.use("/historias", historias);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
