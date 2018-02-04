myErnieApp.controller('anaController', ['$http', function ($http) {

	const self = this;

	self.sayHelloToAna = function () {
		console.log('I am in the anaController');
	};


	self.sayHelloToAna();
}]);