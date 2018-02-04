myErnieApp.controller('ernieController', ['$http', function ($http) {
	self = this;

	self.sayHelloToErnie = function () {
		console.log('I am in the ernieController');

	};

	self.sayHelloToErnie();
}]);