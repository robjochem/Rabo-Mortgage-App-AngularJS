angular.module('components').factory('CalcService', ['$http', function($http) {
    var self = this;
    return {
        getCalcResults: function(income1, income2){
            self.url = "http://agile-wave-86684.herokuapp.com/max-to-loan?income1=" + income1 + "&income2=" + income2;
            return $http.get(self.url)
        }}
}]);