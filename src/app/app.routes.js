var app = angular.module('spa',['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');


    $stateProvider
        .state('main',{
            templateUrl: 'app/shared/main/main.html',
            abstract:true,
            controller: function($scope,$rootScope){
                $rootScope.msg = "Hello World!"
            }
        })
        .state('home',{
            parent:'main',
            url:'/home',
            templateUrl:'app/components/home/homeView.html',
            controller:function($scope,$rootScope){
                $rootScope.page = "Home!"
            }
        })
        .state('work',{
            parent:'main',
            url:'/work',
            templateUrl:'app/components/work/workView.html',
            controller:function($scope,$rootScope){
                $rootScope.page = "Work!"
            }
        });

}]);
