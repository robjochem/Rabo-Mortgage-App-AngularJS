angular.module('components').factory('NavbarService', function() {
    var self = this;

    var navOptions = [
        {id: '0', name: 'Calculator', url: 'src/calculator/calculator.html'},
        {id: '1',name: 'Rent', url: 'src/rent/rent.html'},
        {id: '2',name: 'Conditions', url: 'src/conditions/conditions.html'}
    ];

    return {
        getAll: function() {
            return navOptions;
        },

        getById: function(id) {
            for (var i = 0; i < navOptions.length; i++) {
                if (id === navOptions[i].id) {

                    return navOptions[i];
                }
            }
        },
       
        

    }
});