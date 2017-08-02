var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

myApp.controller('MainController', ['$scope', '$http', '$location', function ($scope, $http, $location){
	$scope.show = true;
	// $scope.currencies;

	// $http.get('/assets/currencies.json')
	// 	.then(function(res){
	// 		$scope.currencies = res.data;   
	// 		console.log($scope.currencies);             
	// });


	








	$scope.addEmailAddress = function(userEmail) {
		console.log("add email address");
		var email = $scope.userEmail;
		console.log("Email: " + email);
		$http.post('/mailing_list', {email: email}).success(function(response) {
				console.log(response);
			});
	};

	$scope.validateEmail = function(email, newsletterForm) {
		var email = $scope.userEmail;
		console.log("Validate existing email called " + email);
		$http.get('/mailing_list/' + email).success(function(response) {
			console.log("Response: " + response);
			if(response == null || email == '') {
				$scope.validationMsg = "Sign up to mailing list for updates";
				$scope.newsletterForm.emailAddress.$setValidity("unique", true);
			} else {
				$scope.validationMsg = "Email already exists";
				$scope.newsletterForm.emailAddress.$setValidity("unique", false);
			}
		});
	};

	$scope.successMessage = function() {
		console.log("Success message");
		$scope.validationMsg = "Success";
	};

	$scope.changeView = function(page) {
		console.log(page);
		if(page == 'home') {
			$location.path('/');
		} else {
			$location.path('/' + page);
		}
	};

	$scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.path());
     return active;
	};

	$scope.myModel = {
      Url: 'https://www.facebook.com/BCooleyMusic/',
      Name: "Cooley's new artist website.",
      ImageUrl: 'http://www.jasonwatmore.com/pics/jason.jpg'
    };
}]);





