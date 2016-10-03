angular.module('myApp', ['ngAnimate'])
    .controller('myCtrl', function() {
        var main = this;
        main.submitted = false;
        main.gender = "";

        main.submitMadLib = function(valid) {
            if (valid) {
                main.submitted = true;

                if (main.gender == "male") {
                    genderificationMale();
                } else {
                    genderificationFemale();
                }

            } else {
                alert('The number is not valid, please enter a positive number');
            }

        };

        var genderificationMale = function() {
            main.genderObject = "he";
            main.genderPronoun = "his";
            main.genderSpecial = "him";
        };

        var genderificationFemale = function() {
            main.genderObject = "she";
            main.genderPronoun = "her";
            main.genderSpecial = "her";
        };
        main.startingPoint = function() {
            main.submitted = false;
            main.gender = "";
            main.name = "";
            main.jobTitle = "";
            main.tediousTask = "";
            main.dirtyTask = "";
            main.celebrity = "";
            main.uselessSkill = "";
            main.adjective = "";
            main.obnoxiousCelebrity = "";
            main.hugeNumber = "";
            main.genderObject = "she";
            main.genderPronoun = "her";
            main.genderSpecial = "her";
        };
    });
