var app = angular.module("scotchApp.Auth", []);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/signup", {
            templateUrl: "auth/signup/signup.html",
            controller: "SignupController"
        })
        .when("/teacherSignup", {
            templateUrl: "auth/signup/teacher-signup.html",
            controller: "TeacherSignupController"
        })
        .when("/login", {
            templateUrl: "auth/login/login.html",
            controller: "LoginController"
        })
        .when("/logout", {
            controller: "LogoutController",
            template: ""
        })
        .otherwise({
            redirectTo: "/home"
        })
}]);

app.service("TokenService", ["$localStorage", function ($localStorage) {

    this.setToken = function (token) {
        $localStorage.userToken = token;
    };

    this.getToken = function () {
        return $localStorage.userToken;
    };

    this.removeToken = function () {
        delete $localStorage.userToken;
    };
}]);

app.service("UserService", ["$http", "$location", "$localStorage", "TokenService", "syllabiService", function ($http, $location, $localStorage, TokenService, syllabiService) {

    this.signup = function (user) {
        return $http.post("/auth/signup", user);
    };

    this.adminSignup = function (user) {
        return $http.post("/auth/signup/admin", user);
    };

    this.login = function (user) {
        return $http.post("/auth/login", user).then(function (response) {
            TokenService.setToken(response.data.token);
            return response;
        });
    };

    this.logout = function () {
        TokenService.removeToken();
        delete $localStorage.syllabusterUser;
        delete $localStorage.savedCourse;
        delete $localStorage.syllabi;
        syllabiService.savedCourse = null;
        $location.path("/login");
    };

    this.isAuthenticated = function () {
        return !!TokenService.getToken();
    };
}]);

app.service("AuthInterceptor", ["$q", "$location", "TokenService", function ($q, $location, TokenService) {
    this.request = function(config) {
        var token = TokenService.getToken();
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    };

    this.responseError = function(response) {
        if (response.status === 401) {
            TokenService.removeToken();
            // $location.path("/login");
        }
        return $q.reject(response);
    };
}]);

app.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
}]);
