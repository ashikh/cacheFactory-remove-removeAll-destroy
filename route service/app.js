var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/about", {
        templateUrl: "views/about.html",
		controller:"aboutCtrl"
    })
	.when("/features", {
        templateUrl: "views/features.html",
		controller:"featuresCtrl"
    })
    .when("/contact", {
        templateUrl: "views/contact.html",
		controller:"contactCtrl"
    })
	.when("/login", {
        templateUrl: "views/login.html",
		controller:"loginCtrl"
    })
    .otherwise({
        template: "<h1>Home</h1><p>This is Home(default) page</p>"
    });
});
app.controller('aboutCtrl', function($route){
	alert("About is displayed using $route service");
});
app.controller('featuresCtrl', function($route){
	alert("Features is displayed using $route service");
});
app.controller('contactCtrl', function($route){
	alert("Contact is displayed using $route service");
});
app.controller('loginCtrl', function($route){
	alert("Login is displayed using $route service");
});