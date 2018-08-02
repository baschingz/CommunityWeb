var app = angular.module("myapp", []);
app.controller("LoginFormController", function ($scope, $http) {

    $scope.loginForm = typeof loginForm != "undefined" ? loginForm ? loginForm : null : null;

    $scope.login = function (e) {
        debugger;
        var req = {
            method: 'POST',
            url: '', // input api url
            params: e,
            headers: { 'Content-Type': 'application/json' }
        }
        $http(req).then(function (response) {
            debugger;
            if (response.data) {
                alert('เข้าสู่ระบบสำเร็จ');
            } else {
                alert('เข้าสู่ระบบไม่สำเร็จ');
            }
        }, function (response) {
            debugger;
            alert('fail');
        });
    }
});