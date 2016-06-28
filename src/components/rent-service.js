angular.module('components').factory('RentService', ['$http', function ($http) {
    var self = this;

    self.item = {};

    $http.get("http://agile-wave-86684.herokuapp.com/current-mortgage-interest-rate").then(
        function (response) {
            //console.log(response.data.currentRate);
            self.item = response.data.currentRate;
            //console.log(self.item);
        },
        function (errResponse) {
            console.log("Error");
        }
    );

    return {
        getCurrentRentRate: function () {
            return self.item;
        }
    }
}]);



