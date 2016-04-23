var express = require("express"),
	router = express.Router(),
	controlador = require("../controladores/controladorUsuarios"),
	passport = require("passport");

router.post("/validar", 
    passport.authenticate('local',
      { successRedirect: '/home',
        failureRedirect: '/'
      }
	)
);

router.get("/login-facebook",
    passport.authenticate('facebook')
);

router.get("/facebookCB",
    passport.authenticate('facebook',
      { successRedirect: '/home',
        failureRedirect: '/'
      }
	)
);

router.get("/logout", controlador.logout);

module.exports = router;