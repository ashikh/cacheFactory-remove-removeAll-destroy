var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/about", {
        template : "<h1>About</h1><p>This is about page</p>"
    })
    .when("/contact", {
        template : "<h1>Contact Us</h1><p>This is contact page</p>"
    })
    .otherwise({
        template : "<h1>Home</h1><p>This is Home(default) page</p>"
    });
});