angular.module('rabo-rent')
    .controller('RentController', ['RentService', function (RentService) {
        var self = this;
        self.getInterestRate = function () {
            return RentService.getCurrentRentRate()
        };

        self.calcIntRate = function() {
            this.resultIntCalc = (self.gezInk/12)*(self.getInterestRate()/100)
        };
    }]);

//Dependency on factory request for current rent
//Dependency on calculate rent