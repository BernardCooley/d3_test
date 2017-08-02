myApp.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'views/home.html',
		controller : 'HomeController'
	})
	.otherwise(
	{
		templateUrl : '<div>No Page</div>'
	});
})