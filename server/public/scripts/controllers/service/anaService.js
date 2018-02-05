myErnieApp.service('AnaService',['$http', function($http){

	console.log('I am in the AnaService !');

	let self = this;
	self.textOut;
	self.anaServiceSayHelloWorld = function (text) {
		console.log(text);
		self.textOut = text;
	}

	self.anaObject = {
		anaFirstFunction: function () {
			console.log('in there again');
		},
		anaText: 'this is in ana Text from the anaService'
	};


}

]);