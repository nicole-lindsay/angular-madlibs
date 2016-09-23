angular.module('myApp', [])
	.controller('myCtrl', function(){
		var main = this;
		main.name = "";
		main.jobTitle = "";
		main.tediousTask = "";
		main.dirtyTask = "";
		main.celebrity = "";
		main.uselessSkill = "";
		main.adjective = "";
		main.obnoxiousCelebrity = "";
		main.hugePercent = "";
		main.genderObject = "she";
		main.genderPronoun = "her";
		main.genderSpecial = "her";
		main.genderificationMale = function(){
			main.genderObject = "he";
			main.genderPronoun = "his";
			main.genderSpecial = "him";
		};
		main.genderificationFemale = function(){
			main.genderObject = "she";
			main.genderPronoun = "her";
			main.genderSpecial = "her";
		};
	});
