angular.module('rabo-app')
    .controller('RabobankApplicationController', ['$rootScope', 'NavbarService', 'AppStateService', function ($rootScope, NavbarService, AppStateService) {
        var self = this;
        self.raboAppHeader = "src/navbar/navbar.html";
        self.raboAppPage = "src/calculator/calculator.html";

        var scope = $rootScope;

        scope.$watch(
            function () {
                return scope.currentId
            },
            function (newVal, oldVal) {
                //console.log(newVal, oldVal);
                if (oldVal !== newVal) {
                    self.raboAppPage = NavbarService.getById(scope.currentId).url;
                }

            }
        );
    }]);