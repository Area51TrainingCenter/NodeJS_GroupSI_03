angular  
    .module("myApp", ["myApp.controllers", "satellizer", "ui.router"])
    .config(["$authProvider", "$stateProvider", function($authProvider, $stateProvider) {
        // Parametros de configuración
        $authProvider.loginUrl = "/auth/signin";
        $authProvider.signupUrl = "/auth/signup";
        $authProvider.tokenName = "token";
        $authProvider.tokenPrefix = "myApp";

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "views/index.html"
            })
            .state("login", {
                url: "/login",
                templateUrl: "views/signin.html",
                controller: "LoginController",
                controllerAs: "login"
            })
            .state("signup", {
                url: "/signup",
                templateUrl: "views/signup.html",
                controller: "SignUpController",
                controllerAs: "signup"
            })
            .state("logout", {
                url: "/logout",
                templateUrl: null,
                controller: "LogoutController"
            })
            .state("private", {
                url: "/private",
                templateUrl: "views/private.html",
                controller: "PrivateController",
                controllerAs: "private"
            });


    }]);