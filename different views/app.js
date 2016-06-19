var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/about", {
        templateUrl: "views/about.html"
    })
	.when("/features", {
        templateUrl: "views/features.html"
    })
    .when("/contact", {
        templateUrl: "views/contact.html"
    })
	.when("/login", {
        templateUrl: "views/login.html"
    })
    .otherwise({
        template: "<h1>Home</h1><p>This is Home(default) page</p>"
    });
});