angular.module('myApp', [])
	.controller('myCtrl', function(){
		this.name = "";
		this.jobTitle = "";
		this.tediousTask = "";
		this.dirtyTask = "";
		this.celebrity = "";
		this.uselessSkill = "";
		this.adjective = "";
		this.obnoxiousCelebrity = "";
		this.hugePercent = "";
		this.genderObject = "she";
		this.genderPronoun = "her";
		this.genderSpecial = "her";
		this.genderificationMale = function(){
			this.genderObject = "he";
			this.genderPronoun = "his";
			this.genderSpecial = "him";
		};
		this.genderificationFemale = function(){
			this.genderObject = "she";
			this.genderPronoun = "her";
			this.genderSpecial = "her";
		};
	});