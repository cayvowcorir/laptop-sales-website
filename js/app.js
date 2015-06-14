var lapsales=angular.module("lapsales", []);

//register the controller
lapsales.controller('lapsalesCtrl', function($scope){
	$scope.laptops= [
		{Toshiba: "hdvc006"},
		{Dell: "dvytosh1"}
	];
});