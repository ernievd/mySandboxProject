let myErnieApp = angular.module('myErnieApp', ['ngRoute']);

myErnieApp.config(function($routeProvider){
	console.log('We are now in myApp.config');
		$routeProvider
			.when('/ernie',{
				templateUrl: 'views/ernie.html',
				controller: 'ernieController as vm'

			})
			.when('/ana',{
				templateUrl: 'views/ana.html',
				controller: 'anaController as vm'
			})
			.otherwise(
				{redirectTo: '/ernie'}
			)
});