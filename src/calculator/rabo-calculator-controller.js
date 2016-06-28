angular.module('rabo-calculator')
    .controller('CalculatorController', ['$scope', 'CalcService', function($scope, CalcService){
        var self = this;
        this.getMaxLoan = function() {
            CalcService.getCalcResults(self.income1, self.income2).then(
                function (response) {
                    self.maxToLoan = response.data.maxToLoan;
                }),
                (function (error) {
                    console.log("error");
                })
        }
    }]);