myErnieApp.controller('anaController', ['AnaService','$http', function (AnaService,$http) {

	const self = this;
	self.searchText = '';
	self.sayHelloToAna = function () {
		console.log('I am in the anaController');
	};

	self.viewService = function(searchText){
		AnaService.anaServiceSayHelloWorld(searchText);
		self.text = AnaService.textOut;
	};


	self.sayHelloToAna();
	self.viewService();

	// self.anaObject.anaFirstFunction();
	self.anaObject = AnaService.anaObject;
	self.anaObject.anaFirstFunction();


}]);