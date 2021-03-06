(function () {

    var app = angular.module("c4iapp", ['ngRoute','ngSanitize']);

    // Define application wide basic constants
    app.constant("CameraData", {
        legislatura_uri: "http://dati.camera.it/ocd/legislatura.rdf/repubblica_17"
    });

    // Define application route
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', { templateUrl: "views/home.html", controller: "HomeController"} )
            .when('/deputato', { templateUrl: "views/deputato.html", controller: "DeputatoController"} )
            .when('/atto', { templateUrl: "views/atto.html", controller: "AttoController"} )


            .when('/sparql', { templateUrl: "views/sparql.html", controller: "HomeController"} )
            .otherwise({redirectTo: '/home'})
        ;
    }]);

})();

