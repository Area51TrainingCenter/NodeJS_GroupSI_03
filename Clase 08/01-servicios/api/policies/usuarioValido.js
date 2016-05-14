module.exports = function(req, res, next) {
	if(req.session.usuario.nombreUsuario=="shidalgo") {
		return next();
	}

	return res.forbidden("No eres un usuario válido.");
}