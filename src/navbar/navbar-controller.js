angular.module('rabo-header')
    .controller('NavBarController', ['$rootScope', 'NavbarService', 'AppStateService', function($rootScope, NavbarService, AppStateService){
        var self = this;

        self.handleShowDetails = function(id) {
            selectOption(id);

        };

        self.getCurrentOption = function() {
            var currentId = AppStateService.getCurrentId();
            return NavbarService.getById(currentId);
        };

        function initialize(){
            getAllOptions();
            selectFirstOption();
        }

        function getAllOptions() {
            self.options = NavbarService.getAll()
        }

        function selectFirstOption() {
            var id = self.options[0].id;
            AppStateService.setCurrentId(id);
            selectOption(id);
        }

        function selectOption(id) {
            var currentId = AppStateService.getCurrentId(),
                currentSelectedOption = NavbarService.getById(currentId),
                newSelectedOption;

            currentSelectedOption.selected = false;
            AppStateService.setCurrentId(id);
            $rootScope.currentId = id;

            newSelectedOption = NavbarService.getById(id);
            newSelectedOption.selected = true;
        }

        initialize();
}]);