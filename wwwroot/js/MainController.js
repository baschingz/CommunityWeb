app.controller("MainController", function ($scope, $http, AuthenticationService) {
    $scope.currentUser = null;
    $scope.localStorage = null;
    $scope.checked = 'notapp';

    function checkStorage() {

        if (localStorage.length == 1) {
            $scope.currentUser = JSON.parse(localStorage.currentUser);
            $scope.currentUser.username = JSON.parse(localStorage.currentUser).username;
            $scope.currentUser.role = JSON.parse(localStorage.currentUser).role;
            $scope.currentUser.app = JSON.parse(localStorage.currentUser).app;
            $scope.currentUser.token = JSON.parse(localStorage.currentUser).token;
            $scope.checked = 'app';
        }
        
    }

    $scope.init = function () {
        checkStorage();
    }

    $scope.logout = function () {
        //debugger;
        delete window.localStorage.currentUser;
    }

    $scope.customerfocus = function () {
        //debugger;
        if (localStorage.length == 1) {
            if ($scope.currentUser.role == "Recruitment") {
                alert('ไป customer focus ในบทบาทของ' + $scope.currentUser.role);
                //window.open('https://localhost:44397/?access_token=' + $scope.currentUser.token);
                window.location.href = 'https://localhost:44397/?access_token=' + $scope.currentUser.token;
            }
            else if ($scope.currentUser.role == "Candidate") {
                alert('ไป customer focus ในบทบาทของ' + $scope.currentUser.role);
            }
            else if ($scope.currentUser.role == "Requirement") {
                alert('ไป customer focus ในบทบาทของ' + $scope.currentUser.role);
            }
        }
       
    }
});