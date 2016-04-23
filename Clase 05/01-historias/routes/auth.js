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

// Rutas de autenticación con Facebook
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

// Rutas de autenticación con Google
router.get("/login-google",
    passport.authenticate(
      'google',
      { scope: [
          'https://www.googleapis.com/auth/plus.login',
          'https://www.googleapis.com/auth/plus.profile.emails.read'
        ] 
      }
    )
);
router.get("/googleCB",
    passport.authenticate('google',
      { successRedirect: '/home',
        failureRedirect: '/'
      }
  )
);

// Rutas de autenticación con Twitter
router.get("/login-twitter",
    passport.authenticate('twitter')
);
router.get("/twitterCB",
    passport.authenticate('twitter',
      { successRedirect: '/home',
        failureRedirect: '/'
      }
  )
);

// Rutas de autenticación con Github
router.get("/login-github",
    passport.authenticate('github')
);
router.get("/githubCB",
    passport.authenticate('github',
      { successRedirect: '/home',
        failureRedirect: '/'
      }
  )
);

router.get("/logout", controlador.logout);

module.exports = router;