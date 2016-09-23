angular.module('myApp', [])
	.controller('myCtrl', function($scope){
		$scope.name = "";
		$scope.jobTitle = "";
		$scope.tediousTask = "";
		$scope.dirtyTask = "";
		$scope.celebrity = "";
		$scope.uselessSkill = "";
		$scope.adjective = "";
		$scope.obnoxiousCelebrity = "";
		$scope.hugePercent = "";
		$scope.genderObject = "she";
		$scope.genderPronoun = "her";
		$scope.genderSpecial = "her";
		$scope.genderificationMale = function(){
			$scope.genderObject = "he";
			$scope.genderPronoun = "his";
			$scope.genderSpecial = "him";
		};
		$scope.genderificationFemale = function(){
			$scope.genderObject = "she";
			$scope.genderPronoun = "her";
			$scope.genderSpecial = "her";
		};
	});